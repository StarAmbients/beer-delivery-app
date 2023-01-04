const { Sales, Users, SalesProducts, sequelize } = require('../database/models');

const findAll = async (role) => {
  const usersObj = await Users.findAll({ where: { role }, exclude: 'password' });
  return usersObj;
};

const createOrder = async (sale) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, cart } = sale;

  try {
    const saleObj = await Sales.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
    });

    const idSale = saleObj.dataValues.id;

    const editedCart = cart.map((el) => ({
      productId: el.id,
      quantity: el.quantity,
      saleId: idSale,
    }));

    const salesProductPromises = editedCart.map((item) => SalesProducts.create(item));
    await Promise.all(salesProductPromises);

    return saleObj;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  findAll,
  createOrder,
};
