const nodemailer = require("nodemailer");
require('dotenv').config();

const client = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env['GOOGLE_API_EMAIL'],
    pass: process.env['GOOGLE_API_SECRET']
  }
});

module.exports = client;
