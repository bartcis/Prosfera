const express = require('express');
const bodyParser = require('body-parser');
const { v4 } = require('uuid');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


app.post('/form', (req, res) => {
  const { body } = req;
  const data = {
    ...body,
    id: v4(),
    timestamp: new Date(),
  };

  const transport = nodemailer.createTransport({
    host: 'xxx',
    port: 465,
    secure: true,
    auth: {
      user: 'xxx',
      pass: 'xxx'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: data.email,
    to: 'xxx',
    subject: data.title,
    text: `${data.name}, ${data.message}`,
    html: `<b>${data.timestamp}</b>`,
  };

  transport.sendMail(mailOptions)
    .then(() => {
      res.json({status: "200"});
    })
    .catch(() => {
      res.json({status: "500"});
    });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});