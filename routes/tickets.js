const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

router.get('/tickets/:id', ticketsCtrl.show);
router.post('/tickets/:id', ticketsCtrl.addToFlight);

module.exports = router;

