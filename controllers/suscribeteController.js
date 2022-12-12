
const Suscriptores = require('../models/suscribeteModel');

class SuscriptoresController {

    async findAll(){
        try {
            return await Suscriptores.find().lean();
        } catch (error) {
            throw error;
        }
    }

    async create(suscriptor){
        try {
            return await Suscriptores.create(suscriptor)
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await Suscriptores.findByIdAndDelete(id)
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new SuscriptoresController;