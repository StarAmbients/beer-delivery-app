const express = require('express');
const productController = require('../controllers/product.controller');
const tokenValidator = require('../middlewares/token.validator');

const productRouter = express.Router();

productRouter.get('/:id', tokenValidator, (req, res) => productController.getById(req, res));
productRouter.get('/', tokenValidator, (req, res) => productController.getProduct(req, res));
productRouter.post('/', tokenValidator, (req, res) => productController.postProduct(req, res));
productRouter.delete('/', tokenValidator, (req, res) => productController.deleteProduct(req, res));
productRouter.put('/', tokenValidator, (req, res) => productController.editProduct(req, res));

module.exports = productRouter;
