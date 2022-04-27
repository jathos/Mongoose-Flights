var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.showAll);
router.get('/new', flightsCtrl.addNew);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.showOne);
// router.post('/:id', flightsCtrl.addDest);

module.exports = router;
