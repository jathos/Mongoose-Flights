const flight = require('../models/flight');
const Flight = require('../models/flight');

module.exports = {
    showAll,
    addNew,
    create,
    showOne
};

function showAll(req, res) {
    Flight.find({}, function (err, doc) {
        res.render('flights/index', {
            flight: doc
        });
    });
};

function addNew(req, res) {
    res.render('flights/new')
};

function create(req, res) {
    // remove whitespace next to commas
    req.body.airline = req.body.airline.replace(/\s*,\s*/g, ',');
    req.body.flightNo = req.body.flightNo.replace(/\s*,\s*/g, ',');
    var flightData = new Flight(req.body);
    flightData.save(function (err) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
}

function showOne(req, res) {
    Flight.findById(req.params.id, function (err, doc) {
        res.render('flights/show', {
            flight: doc
        })
    })
};