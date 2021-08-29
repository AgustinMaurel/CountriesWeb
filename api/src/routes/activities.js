const { Router } = require('express');
const { addActivitie }= require('../controllers/activitiesCont')

const router = Router();

router.post('/', addActivitie)

module.exports = router;
