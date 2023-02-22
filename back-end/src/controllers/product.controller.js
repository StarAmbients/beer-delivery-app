const productService = require('../services/product.service');

const getProduct = async (req, res) => {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
};

const postProduct = async (req, res) => {
  console.log('ESTAMOS NO CONTROLER ');
  const product = await productService.postProduct(req.body);
  return res.status(201).json(product);
};

module.exports = {
  getProduct,
  postProduct,
};
