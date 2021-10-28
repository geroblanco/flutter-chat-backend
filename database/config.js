const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('db online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de dstos hable con el admin');
    }
}

module.exports = {
    dbConnection
}
