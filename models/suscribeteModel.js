
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const suscriptorSchema = new Schema({
    email2: {
        type: 'string',
        required: true
    },
    timestamp: {
        type: 'Date',
        default: new Date()
    }
});

const Suscriptor = mongoose.model('suscriptor', suscriptorSchema);
module.exports = Suscriptor;
