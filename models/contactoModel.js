
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

let date = new Date()
 let day = `${(date.getDate())}`.padStart(2,'0');
 let month = `${(date.getMonth()+1)}`.padStart(2,'0');
 let year = date.getFullYear();

const contactoSchema = new Schema({
    nombre: {
        type: 'string',
        required: false
    },
    email: {
        type: 'string',
        required: true
    },
    mensaje: {
        type: 'string',
        required: true
    },
    timestamp: {
        type: 'Date',
        default: new Date(year, month, day)
    }
});

const Contacto = mongoose.model('contacto', contactoSchema);
module.exports = Contacto;
