const mongoose = require('mongoose');

const reservaSchema = mongoose.Schema({
    name:{type: String}
});

module.exports = mongoose.model('reserva', reservaSchema);