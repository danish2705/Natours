const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  //1. Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    //Activate in gmail "less secure app" option
  });
  //2. define th email options
  const mailOptions = {
    from: "danish meraj <danish@tour.io",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  // actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
