/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// email sending
const nodemailer = require('nodemailer');

// import authentication library
const auth = require("./auth");

const cron = require('cron');

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});


router.post("/sendEmail", (req, res) => {
  // sending email
  console.log(req.body.recipient_mail);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.PERSONAL_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  const recipient = req.body.recipient_mail;
  const content = req.body.content;
  const date = req.body.date;

  const sendMsg = {
    from: process.env.PERSONAL_EMAIL,
    to: recipient,
    subject: 'You got a new message from Dear Balloons!',
    html: content,
  }  

  const job = new cron.CronJob(date, () => {
    transporter.sendMail(sendMsg, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });

  res.status(200).send({ message: "Successfully sent email!" });

});


// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
/*router.all("*", (req, res) => {
   console.log(`API route not found: ${req.method} ${req.url}`);
   res.status(404).send({ msg: "API route not found" });
 });*/
 
// for all other routes, render index.html and let react router handle it

  // mongo
  // const newEmail = new Email({})

/*router.post("/postmessage", (req, res) => {
  const newMessage = {
    sender_mail: "test sender email", 
    recipient_mail: "test recipient email",
    content: "test content", 
    data: "test date"
  };
  
  data.stories.push(newMessage);
  res.send(newMessage);
});*/

// import models so we can interact with the database
const User = require("./models/user");
const Message = require("./models/message");


router.post("/postmessage", (req, res) => {
  console.log("test");
  let testMessage = new Message ({
    sender_mail: req.body.sender_mail, 
    recipient_mail: req.body.recipient_mail, 
    content: req.body.content, 
    date: req.body.date
  });
  testMessage.save()
            .then((student) => console.log("Added ${student.sender_mail}"));
});

router.get("/getmessage", (req, res) =>{
  Message.findOneAndDelete({}).then((messages) => res.send(messages));

});




 
module.exports = router;

