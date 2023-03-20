// const CustomError = require('../err/CustomError');
const forgottenRepository = require('../repositories/forgotten.repository');
const client = require('../integrations/Mail/mailer');
require('dotenv').config();

const postEmail = async ({ email }) => {
  const emailUser = await forgottenRepository.getUser(email);
  if (emailUser) {
    const mailOptions = {
      from: process.env['GOOGLE_API_EMAIL'],
      to: emailUser,
      subject: "Password Recovery from Very Delicious Delivery App",
      text: "Beer Delivery message for you!"
    };
    
    client.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('E-mail enviado: ' + info.response);
      }
    });
  }
  
  return emailUser;
};

module.exports = {
  postEmail,
};
