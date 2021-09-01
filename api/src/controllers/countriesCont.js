const { Country, Activitie } = require('../db.js')
const axios = require('axios')
const { COUNTRIES_URL, COUNTRIES_NAME, COUNTRIES_ALPHA } = require('../../constants')
const { Op } = require('sequelize')

function getAllCountries(req, res, next) {
    const { name } = req.query
    if (name) {
        return Country.findOne({
            where: { name: { [Op.substring]: `%${name}%` } },
            attributes: { exclude: ['subregion', 'area', 'population', 'createdAt', 'updatedAt'] }
        })
            .then((country) => res.status(200).send(country))
            .catch((e) => next(e))
    }

    return Country.findAll({
        attributes: { exclude: ['capital', 'subregion', 'area', 'population', 'createdAt', 'updatedAt'] }})
        .then((countries) => res.status(200).send(countries))
        .catch((e) => next(e))
}

async function getById(req, res, next) {
    const { id } = req.params;
    let dbCountry = await Country.findByPk(id, {
        include: [{
            model: Activitie,
            as: "activities",
            attributes: ["id", "name"]
        }]
    })
    let apiCountry = await axios.get(COUNTRIES_ALPHA + id)

    // REVEER PEDIDO A API Y DB Y PROMESAS

    await Promise.all([dbCountry, apiCountry])

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
    getById
}




