require("dotenv").config();
const nodemailer = require("nodemailer");

//Step 1
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

let mailOptions = {
  from: "edisondevadoss@gmail.com",
  to: "edisonj1996@gmail.com",
  subject: "Testing and Testing",
  html: `<h2>Welcome, Nitin inviting you as a typist</h2><p>Your email is: <strong>edisonj1996@gmail.com</strong></p><p>Your password is: <strong>123456</strong></p>`
};

transporter.sendMail(mailOptions, function(error, data) {
  if (error) {
    console.log("error accoure", error);
  } else {
    console.log("email send success", data);
  }
});
