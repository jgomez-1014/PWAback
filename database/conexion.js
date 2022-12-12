const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.MONGOATLAS;

const conexion =  mongoose.connect(URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Conexión Correcta');
})

mongoose.connection.on('error', () => {
    console.log('Error en mi Conexión');
})

module.exports = conexion;
