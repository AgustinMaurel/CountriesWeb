const { Activitie, Country } = require('../db.js')


async function addActivitie(req, res, next) {
    const { name, dificult, duration, season, nameCountry } = req.body
    let actCreated = await Activitie.create({
        name,
        dificult,
        duration,
        season,

    })
    let idCountry = await Country.findOne({
        where: {
            name: nameCountry
        },
        attributes: ['id']
    })
        return await Promise.all([actCreated,idCountry])
        .then((res) => res[0].addCountries(res[1]))
        .then((act) => res.status(200).send(act))
        .catch((e) => { next(e)})
}

module.exports = {
    addActivitie
}