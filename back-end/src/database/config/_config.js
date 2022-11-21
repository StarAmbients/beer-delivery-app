require('dotenv').config();

const environment = "production";

const config = {
  host: process.env.MYSQLHOST || process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQLPORT || '3306',
  database: 
    `${process.env.MYSQLDATABASE || 'delivery-app'}`,
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'password',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

// export const development = {
//   ...options,
// };
// export const test = {
//   ...options,
// };
// export const production = {
//   ...config,
// };

module.exports = {
  production: config,
};