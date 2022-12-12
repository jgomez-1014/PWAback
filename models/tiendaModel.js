const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const tiendaSchema = new Schema({
    nombreT: {
        type: 'string',
        required: true
    },
    precioT: {
        type: 'string',
        required: true
    },
    imgT: {
        type: 'string',
        required: true
    },
    detalleT: {
        type: 'string',
        required: true
    },
    fechaT: {
        type: 'Date',
        default: new Date()
    }
});

const Tienda = mongoose.model('tienda', tiendaSchema);
module.exports = Tienda;
