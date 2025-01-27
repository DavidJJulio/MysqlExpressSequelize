const PokemonServices = require('../services/pokemonServices');

class PokemonController {

    static async crear(req, res) {

        try {

          const pokemon = await PokemonServices.crearPokemon(req.body)
          return res.status(200).json(pokemon)

        } catch (error) {

          return res.status(500).json({ error: 'Error al crear el usuario', detalles: error.message })

        }

      }
    
      static async obtenerTodos(req, res) {

        try {

          const pokemon = await PokemonServices.obtenerPokemones()
          return res.status(200).json(pokemon)

        } catch (error) {

          return res.status(500).json({ error: 'Error al obtener los usuarios', detalles: error.message })

        }

      }
    
      static async eliminar(req, res) {

        try {

          const pokemon = await PokemonServices.eliminarPokemon(req.params.id)
          return res.status(200).json(pokemon)

        } catch (error) {

          return res.status(500).json({ error: 'Error al eliminar el usuario', detalles: error.message })

        }

      }

}

module.exports = PokemonController;