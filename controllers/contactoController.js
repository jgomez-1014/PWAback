
const Contacto = require('../models/contactoModel');

class ContactoController {

    async findAll(){
        try {
            return await Contacto.find().lean();
        } catch (error) {
            throw error;
        }
    }

    async create(contacto){
        try {
            return await Contacto.create(contacto)
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await Contacto.findByIdAndDelete(id)
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ContactoController;