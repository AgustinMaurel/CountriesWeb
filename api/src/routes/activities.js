const { Router } = require('express');
const { addActivitie, getActivities }= require('../controllers/activitiesCont')

const router = Router();

router.get('/', getActivities)

router.post('/', addActivitie)

module.exports = router;
