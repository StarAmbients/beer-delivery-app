require('dotenv').config();

const config = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  dialect: process.env.DATABASE_SET || 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};