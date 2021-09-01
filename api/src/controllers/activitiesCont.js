const { Activitie, Country } = require('../db.js')

async function addActivitie(req, res, next) {
    const { name, dificult, duration, season, nameCountry } = req.body
    let actCreated = await Activitie.create({
        name,
        dificult,
        duration,
        season,

    })
    let nameCountries = await Country.findAll({
        where: {
            name: nameCountry
        },
        attributes: ['id']
    })
             console.log(nameCountries)
        return await Promise.all([actCreated,nameCountries])
        .then((res) => res[0].addCountries(res[1]))
        .then((act) => res.status(200).send(act))
        .catch((e) => { next(e)})
}

module.exports = {
    addActivitie
}