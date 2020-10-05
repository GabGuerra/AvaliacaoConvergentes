const livrosRouter = require('express').Router();
const livrosController = require('../controllers/LivrosController')();

livrosRouter.get('/ListarLivros', livrosController.ListarLivros);
livrosRouter.get('/FiltrarLivros/:nomeLivro', livrosController.FiltrarLivros);

module.exports = livrosRouter;