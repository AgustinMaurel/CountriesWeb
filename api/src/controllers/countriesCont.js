const { Country, Activitie } = require('../db.js')
const axios = require('axios')


function getAllCountries(req, res, next) {
    const { name } = req.query
    if (name) {
        return Country.findOne({ where: { name: name } })
        .then((country) => res.status(200).send(country))
        .catch((e) => next(e))
    }
    return Country.findAll().then((countries) => res.status(200).send(countries))
        .catch((e) => next(e))
}

function getById(req, res, next) {
    const { id } = req.params;
    return Country.findByPk(id,{
        include: [{
            model: Activitie,
            as: "activities",
            attributes: ["id", "name"]
        }]
    })
        .then((country) => res.status(200).send(country))
        .catch((e) => next(e))
}


module.exports = {
    getAllCountries,
    getById
}




