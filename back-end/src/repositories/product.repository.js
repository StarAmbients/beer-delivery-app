const { Products } = require('../database/models');

const getAllProducts = async () => {
  const productsObj = await Products.findAll();
  return productsObj;
};

const getById = async (id) => {
  const product = await Products.findByPk(id);
  return product;
};

const getProduct = async ({ name }) => {
  const productObj = await Products.findOne({ where: { name } });
  return productObj;
};

const postProduct = async ({ name, price, urlImage }) => {
  const productObj = await Products.create({ name, price, urlImage });
  return productObj;
};

const deleteProduct = async ({ id }) => {
  const deletedProduct = await Products.destroy({ where: { id } });
  return deletedProduct;
};

const editProduct = async ({ id, name, price, urlImage }) => {
  const updatedProduct = await Products.update({ name, price, urlImage }, { where: { id } });  
  return updatedProduct;
};

module.exports = {
  getAllProducts,
  getProduct,
  postProduct,
  getById,
  deleteProduct,
  editProduct,
};
