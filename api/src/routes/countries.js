const { Router } = require('express');

const {getAllCountries, getById} = require('../controllers/countriesCont')
const router = Router();

router.get('/', getAllCountries)

router.get('/:id', getById)



module.exports = router;
