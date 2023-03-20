const forgottenServices = require('../services/forgotten.service.js');

const postEmail = async (req, res) => {
  const emailUser = await forgottenServices.postEmail(req.body);
  return res.status(201).json(emailUser);
};

module.exports = {
  postEmail,
};