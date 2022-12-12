
const Tienda = require('../models/tiendaModel');

class tiendaController {

    async findAll(){
        try {
            return await Tienda.find().lean();
        } catch (error) {
            throw error;
        }
    }

    async create(planta){
        try {
            return await Tienda.create(planta)
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new tiendaController;