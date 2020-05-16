const nodemailer = require('nodemailer');

module.exports = {
  transporter: nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'csc667project@gmail.com',
      pass: 'Csc667project!',
    },
  }),
  fromEmail: 'csc667project@gmail.com',
};
