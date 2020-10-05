const indexRouter = require('express').Router();
const indexController = require('../controllers/IndexController')();

indexRouter.get('/', indexController.Index);

module.exports = indexRouter;
