const { Op } = require('sequelize');
const { Users } = require('../database/models');

const getUser = async ({ name, email }) => {
  const user = await Users.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  return user;
};

const getUsers = async () => {
  const users = await Users.findAll();
  return users;
};

const postUser = async ({ name, email, password, role }) => {
  const newUser = await Users.create({ name, email, password, role });
  return newUser;
};

const deleteUser = async ({ name, email }) => {
  const deletedUser = await Users.destroy({ where: { [Op.or]: [{ name }, { email }] } });
  return deletedUser;
};

const editUser = async ({ id, name, email, password, role }) => {
  const updatedUser = await Users.update({ name, email, password, role }, { where: { id } });
  return updatedUser;
};

module.exports = {
  getUser,
  getUsers,
  postUser,
  deleteUser,
  editUser
};
