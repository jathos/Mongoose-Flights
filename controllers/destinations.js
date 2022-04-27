const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req, res) {
    Flight.findById(req.params.id, function (err, doc) {
        doc.destinations.push(req.body);
        doc.save(function (err) {
            res.redirect(`/flights/${doc._id}`);
        });
    });
};