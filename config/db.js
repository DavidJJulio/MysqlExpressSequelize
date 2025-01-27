const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pokemones', 'david', 'rubio030816', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const connectDB = async() => {

    try {

        await sequelize.authenticate();
        console.log("Conexion con la base de datos exitosa")
        
    } catch (error) {

        console.log("Conexion con la base de datos fallida", error)
        process.exit(1);
        
    }

}

module.exports = {
    sequelize,
    connectDB
}