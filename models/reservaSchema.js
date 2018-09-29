const mongoose = require('mongoose');

const reservaSchema = mongoose.Schema({
    _id:{type:Number},
    dateBorn:{type: String},
    name:{type: String},
    reservation:{type: Object}
});

module.exports = mongoose.model('reserva', reservaSchema);