const { validateToken } = require('../helpers/validate.token');
const CustomError = require('../err/CustomError');

const tokenValidator = async (req, _res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new CustomError(400, 'Some data was not reported, please check and try again');
    }

    await validateToken(authorization);

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = tokenValidator;
