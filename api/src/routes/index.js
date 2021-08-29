const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoutes = require ('./countries') 
const activitiesRoutes = require ('./activities') 

const router = Router();

router.use('/countries', countriesRoutes)
router.use('/activities', activitiesRoutes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
