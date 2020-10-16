const express = require('express');
const nodeMailer = require('nodemailer');
const prepareEmailFields = require('./prepareEmailFields');

require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('itsolution'));

const transporter = nodeMailer.createTransport({
  service : 'gmail',
  auth    : {
    user : process.env.SENDER_MAIL,
    pass : process.env.SENDER_PASS
  }
});

app.post('/', (req, res) => {
  try {
    const mailOptions = prepareEmailFields(req.body);
    transporter.sendMail(mailOptions, (err, info) => {
      console.log({ err, info });
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Live at http://localhost:${PORT}`);
});
