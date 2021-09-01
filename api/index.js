
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const { COUNTRIES_URL } = require('./constants')
const axios = require('axios')
const { PORT } = process.env
// Syncing all the models at once.

conn.sync().then(async () => { // HACER VALIDACION PARA PRECARGAR DE PAISES EN DB
  let aux = await Country.findAll()
  if (aux.length === 0) {
    const apiCountries = await axios.get(COUNTRIES_URL)
    let countriesApi = await apiCountries.data?.map(e => {
      return {
        name: e.name,
        image: e.flag,
        continent: e.region,
        id: e.alpha3Code
      }
    })
    await Country.bulkCreate(countriesApi)
  } 
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    })
  ;

});


