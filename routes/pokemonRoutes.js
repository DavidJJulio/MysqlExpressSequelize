const express = require('express')
const PokemonController = require('../controllers/pokemonController')

const router = express.Router()

router.post('/', PokemonController.crear)
router.get('/', PokemonController.obtenerTodos)
router.delete('/:id', PokemonController.eliminar)

module.exports = router