
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const { COUNTRIES_URL } = require('./constants')
const axios = require('axios')
const { PORT } = process.env
// Syncing all the models at once.

conn.sync().then(async () => { 
  let aux = await Country.findAll()
  if (aux.length === 0) {
    const apiCountries = await axios.get(COUNTRIES_URL)
    let countriesApi = await apiCountries.data?.map(e => {
      return {
        name: e.name.common,
        image: e.flags[0],
        continent: e.region,
        id: e.cca3,
        area : e.area,
        capital : e.capital ? e.capital[0] : false,
        subregion: e.subregion
      }
    })
    await Country.bulkCreate(countriesApi)
  } 
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`);
    })
  ;

});


