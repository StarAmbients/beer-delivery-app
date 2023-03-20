const express = require('express');
const forgottenController = require('../controllers/forgotten.controller');

const forgottenRouter = express.Router();

forgottenRouter.post('/', (req, res) => forgottenController.postEmail(req, res));

module.exports = forgottenRouter;
