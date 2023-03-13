const productService = require('../services/product.service');

const getProduct = async (req, res) => {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
};

const postProduct = async (req, res) => {
  const product = await productService.postProduct(req.body);
  return res.status(201).json(product);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const product = await productService.getById(numberId);
  return res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const deletedProduct = await productService.deleteProduct(req.body);
  return res.status(200).json(deletedProduct);
};

const editProduct = async (req, res) => {
  const editedProduct = await productService.editProduct(req.body);
  return res.status(201).json(editedProduct);
};

module.exports = {
  getProduct,
  postProduct,
  getById,
  deleteProduct,
  editProduct,
};
