const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    addToFlight,
    show
};

function addToFlight(req, res) {
    let flightID = req.params.id;
    let newTicket = new Ticket(req.body)
    newTicket.flight = flightID;
    newTicket.save(function (err) {
        Flight.findById(req.params.id, function (err, flight) {
            res.render('flights/show', {
                flight, tickets: Ticket
            });
        });
    });
};

function show(req, res) {
    res.render('tickets/new', {
        flight: req.params.id
    })
};