const express = require('express');
const { connectDB } = require('./config/db');
const { syncModels } = require('./models');
const PokemonRoutes = require('./routes/pokemonRoutes');

const app = express();

app.use(express.json());

app.use('/pokemons', PokemonRoutes);

const startServer = async () => {

  try {

    await connectDB()
    await syncModels()
    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    })

  } catch (error) {

    console.error('Error al iniciar el servidor:', error)

  }
}

startServer();