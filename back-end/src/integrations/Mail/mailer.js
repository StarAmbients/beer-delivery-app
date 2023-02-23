const nodemailer = require("nodemailer");

const client = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GOOGLE_API_EMAIL,
    pass: process.env.GOOGLE_API_SECRET
  }
});

const user = {
  email: "user@example.com",
};

const mailOptions = {
  from: process.env.GOOGLE_API_EMAIL,
  to: user.email,
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
