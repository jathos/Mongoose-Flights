var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.showAll);
router.get('/new', flightsCtrl.addNew);
router.post('/', flightsCtrl.create);

module.exports = router;
