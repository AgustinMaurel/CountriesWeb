const { Activitie, Country } = require('../db.js')
const { Op } = require ('sequelize')

async function getActivities(req, res, next){
    return Activitie.findAll()
    .then((activities)=>res.json(activities))
    .catch((e)=>next(e))

}
async function addActivitie(req, res, next) {
    const { name, dificult, duration, season, image, nameCountry } = req.body

if  (name && typeof name === 'string' &&
        dificult && !typeof dificult === 'number' ? Number(dificult): dificult &&
        duration && typeof duration === 'string' &&
        nameCountry.length && season){
        let actCreated = await Activitie.create({
        name,
        dificult,
        duration,
        season,
        image,
    })
    

    let nameCountries = await Country.findAll({
        where: {
            name : nameCountry
        },
        attributes: ['name', 'id']
    })

             
        return await Promise.all([actCreated,nameCountries])
        .then((res) => res[0].addCountries(res[1]))
        .then((act) => res.status(200).send(act))
        .catch((e) => { next(e)})
}
}






module.exports = {
    addActivitie,
    getActivities
}