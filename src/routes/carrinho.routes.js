const carrinhoRouter = require('express').Router();
const carrinhoController = require('../controllers/CarrinhoController')();

carrinhoRouter.get('/FinalizarCarrinho', carrinhoController.FinalizarCarrinho);
carrinhoRouter.post('/AdicionarAoCarrinho/:sku', carrinhoController.AdicionarAoCarrinho);

module.exports = carrinhoRouter;