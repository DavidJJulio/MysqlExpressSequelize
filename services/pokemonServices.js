const { Pokemon } = require('../models/index')

class PokemonService {

    static async crearPokemon(data) {

        return await Pokemon.create(data)

    }

    static async obtenerPokemones() {

        return await Pokemon.findAll()

    }
    
    static async obtenerPokemon(id) {

        return await Pokemon.findByPk(id)

    }

    static async actualizarPokemon(id, data) {

        return await Pokemon.update(data, { where: { id } })

    }

    static async eliminarPokemon(id) {

        return await Pokemon.destroy({ where: { id } })

    }

}

module.exports = PokemonService