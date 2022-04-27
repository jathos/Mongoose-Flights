const Ticket = require('../models/ticket');

module.exports = {
    // create,
    show
};

// function create(req, res) {

// }

function show(req, res) {
    res.render('tickets/new')
};