const { sequelize } = require('../config/db')
const Pokemon = require('./pokemon')

const syncModels = async () => {

    try {

        await sequelize.sync({alter: true});
        console.log("Sincronizacion con la DB exitosa")
        
    } catch (error) {

        console.log("Sincronizacion con la DB fallida", error)
        process.exit(1)
        
    }


}

module.exports = { sequelize, Pokemon, syncModels };