const { Users } = require('../database/models');

const getUser = async (email) => {
  const user = await Users.findOne({ where: { email } });
  return user.email;
};

module.exports = {
  getUser,
};
