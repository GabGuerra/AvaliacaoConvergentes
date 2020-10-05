var express = require('express');
var router = express.Router();
const indexController = require('../controllers/IndexController')();

router.get('/', indexController.Index);
router.get('/adicionarAoCarrinho/:sku', indexController.AdicionarAoCarrinho);
router.get('/redirectUsuario', indexController.redirectUsuario);

module.exports = router;
