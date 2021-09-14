const { Country, Activitie } = require('../db.js')
const axios = require('axios')
const { COUNTRIES_ALPHA } = require('../../constants')
const { Op } = require('sequelize')

function getAllCountries(req, res, next) {
    let auxName = req.query.name ? req.query.name : null
    if (auxName && typeof auxName === 'string') {
        auxName = auxName.charAt(0).toUpperCase() + auxName.slice(1).toLowerCase()

        return Country.findAll({
            where: { name: { [Op.substring]: `${auxName}` } },
            attributes: { exclude: ['subregion', 'area', 'createdAt', 'updatedAt'] }
        })
            .then((country) => res.status(200).send(country))
            .catch((e) => next(e))
    }

    return Country.findAll({
        attributes: { exclude: ['capital', 'subregion', 'area', 'createdAt', 'updatedAt'] },
        include: [{
            model: Activitie,
            as: "activities",
            attributes: ["id", "name"]
        }]
    })
        .then((countries) => res.status(200).send(countries))
        .catch((e) => next(e))
}



function getById(req, res, next) {
    const { id } = req.params;
    let dbCountry = Country.findByPk(id, {
        include: [{
            model: Activitie,
            as: "activities"
        }]
    })
    let apiCountry = axios.get(COUNTRIES_ALPHA + id)

    Promise.all([dbCountry, apiCountry])

        .then((result) => {
            var countryApi = {
                capital: result[1].data.capital,
                subregion: result[1].data.subregion,
                area: result[1].data.area,
                population: result[1].data.population
            }
            const fullCountry = {
                ...result[0].dataValues, // base de datos con ID, name, image, continent
                ...countryApi            // piso los valores capital, subregion, area, population 
                // con los datos de la api
            }
            return res.json(fullCountry)
        })
        .catch((e) => { next(e) })
}



module.exports = {
    getAllCountries,
    getById,

}




