const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req,res) => {
  res.send('welcome to form');
});

app.post('/api/form', (req, res) => {
  let data = req.body;
  console.log('sending-mail...')
  console.log(data);

  let mailData =
    '?name=' +
    data.name +
    '&email=' +
    data.email +
    '&mobile=' +
    data.MobileNo +
    '&courses=' +
    data.courses +
    '&message=' +
    data.message;
  let encryptData = Buffer.from(mailData).toString('base64');
  let mailUrl = 'https://localhost:3000/thanks/' + encryptData; // CHANGE TO YOUR FRONTEND URL
  let smptTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: '587',
    auth: {
      user: 'develearn.campaigns@gmail.com', //user email
      pass: 'badprogramming', //user email password
    },
  });
  console.log('sending-mail...2')

  let mailOptions = {
    from:'develearn.campaigns@gmail.com',
    to: data.email, //user email
    subject: `Develearn Course Enquiry from ${data.name}`,
    html: `
        <div style="border:2px solid blue;">
        <h3 style="color:blue;position:absolute;font-family:helvetical;font-size:20px;left:20px;bottom:325px;">information</h3>
        <ul>
            <li><a href="${mailUrl}">Click Here Verify your mail</a></li>
        </ul>
        </div>
        `,
  };
  console.log('sending-mail...3')

  smptTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send('success');
    }
  });

  smptTransport.close();
});
console.log('sending-mail...4')

app.post('/api/acceptmail', (req, res) => {
  let data = req.body;
  console.log(data);

  let smptTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: '587',
    auth: {
      user: 'yourmailid', //user email
      pass: 'yourpass', //user email password
    },
  });
  console.log('sending-mail...5')

  let mailOptions = {
    from: data.mail,
    to: 'yourmailid', //user email
    subject: `Develearn Course Enquiry from ${data.name}`,
    html: `
        <h3>information</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Mobile: ${data.MobileNo}</li>
            <li>Email: ${data.email}</li>
            <li>Courses: ${data.courses}</li>
            <li>message: ${data.message}</li>
        </ul>
        `,
  };
  console.log('sending-mail...6')

  smptTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send('success');
    }
  });
  console.log('sending-mail...7')

  smptTransport.close();
  console.log('sending-mail...8')

});

// This api should work after rediretcion to thanks.js page -automatic reply for all user
app.post('/api/replymail', (req, res) => {
// const data = {
//   email:'rs181915@gmail.com',
//   name:'rahul'
// }
const {data} = req.body;
console.log('hitting--->1',data)
  let smptTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: '587',
    auth: {
      user: 'develearn.campaigns@gmail.com', //user email
      pass: 'badprogramming', //user email password
    },
  });
  console.log('hitting--->2')

  let mailOptions = {
    from: 'develearn.campaigns@gmail.com',
    to: data.email, //user email
    subject: `Develearn Course Enquiry from ${data.name}`,
    text:'Checkout this attachment, Thanks',
    attachments: [{
      filename: 'DevLearnBrochure.pdf',
      path: './file/DeveLearnBrochure.pdf',
      contentType: 'application/pdf'
    }]
  };
  console.log('hitting--->3')

  smptTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log('error')
      res.send(error);
    } else {
      console.log('sucess')
      res.send('success');
    }
  });
  console.log('hitting--->4')

  smptTransport.close();
console.log('hitting--->5')

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server starting at ${PORT}`);
});
