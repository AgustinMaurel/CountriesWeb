const { Country, Activitie } = require('../db.js')
const axios = require('axios')
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
        attributes: { exclude: ['createdAt', 'updatedAt'] },
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
    Country.findByPk(id, {
        include: [{
            model: Activitie,
            as: "activities"
        }]
    }) .then((result) => {
           res.send(result)
        })
        .catch((e) => { next(e) })
}



module.exports = {
    getAllCountries,
    getById,

}




