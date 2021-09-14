/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
var supertest = require('supertest')
const app = require('../../src/app.js');
const api = supertest(app)
const session = require('supertest-session');

const { Country, Activitie, conn } = require('../../src/db.js');



const agent = session(app);
const country = {
  name: 'Argentina',
  image: 'https://cyt-ar.com.ar/cyt-ar/images/3/3a/Bandera_argentina.jpg',
  id: 'ARG',
  continent: 'americas'
};
const activitie = {
  name : 'ski',
  id: '1'
}

/* describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/api/countries').expect(200)
    );
  });
}); */


/* describe('Activities routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Activitie.sync({ force: true })
    .then(() => Activitie.create(activitie)));x
  describe('POST /Activities', () => {
    it('should get 200', () =>
      agent.post('/api/activities').expect(200).send(act)
    );
  });
}); */
/* 
describe('/activities',()=>{
  it('POST agregar una nueva actividad y devuelve el nombre de la actividad agregada', async function() {
      return supertest
      .post('/api/activities')
      .send(activitie)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function(res) {
        expect(res.body).toEqual(activitie);
      });
  });
}); */

