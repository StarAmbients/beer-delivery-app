const CustomError = require('../err/CustomError');
const productRepository = require('../repositories/product.repository');

const getAllProducts = async () => {
  const products = await productRepository.getAllProducts();
  if (!products) throw new CustomError(404, 'Not found');
  return products;
};

const postProduct = async ({ name, price, urlImage }) => {
  const product = await productRepository.getProduct({ name });

  if (product) throw new CustomError(409, 'Conflict');

  const newProduct = await productRepository.postProduct({
    name,
    price,
    urlImage,
  });
  const { id } = newProduct.dataValues;

  return { id, name, price, urlImage };
}

const getById = async ( id ) => {
  const product = await productRepository.getById(id);
  if (!product) throw new CustomError(404, 'Not found');
  return product;
};

const deleteProduct = async ({ id }) => {
  const deletedProduct = await productRepository.deleteProduct({ id });
  return { message: `${deletedProduct} product deleted successfully` };
};

const editProduct = async ({ id }) => {
  const product = await productRepository.getProduct({ id });
  await productRepository.editUser({
    id,
    name: product.name,
    price: product.price,
    urlImage: product.urlImage,
  });

  return { message: 'New product added successfully' };
};

module.exports = {
  getAllProducts,
  postProduct,
  getById,
  deleteProduct,
  editProduct
};
