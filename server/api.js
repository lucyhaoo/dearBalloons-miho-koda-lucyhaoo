/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require('express');

// import models so we can interact with the database
const nodemailer = require('nodemailer');
const User = require('./models/user');

// email sending

// import authentication library
const auth = require('./auth');

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

// initialize socket
const socketManager = require('./server-socket');

router.post('/login', auth.login);
router.post('/logout', auth.logout);
router.get('/whoami', (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post('/initsocket', (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

router.post('/sendEmail', (req, res) => {
  // sending email

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.PERSONAL_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  const recipient = req.body.recipientEmail || 'mihokoda3@gmail.com';
  const content = req.body.contentEmail || 'test message';

  const sendMsg = {
    from: process.env.PERSONAL_EMAIL,
    to: recipient,
    subject: 'You got a new message from Dear Balloons!',
    text: content,
  };

  transporter.sendMail(sendMsg, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });

  // mongo
  // const newEmail = new Email({})
  const data = {
    stories: [
      {
        _id: 0,
        creator_name: 'Shannen Wu',
        content: 'I love corgis!',
      },
    ],
    comments: [
      {
        _id: 0,
        creator_name: 'Jessica Tang',
        parent: 0,
        content: 'Wow! Me Too!',
      },
    ],
  };

  res.status(200).send({ message: 'Successfully sent email!' });
});

const data = {
  stories: [
    {
      _id: 0,
      creator_name: 'Shannen Wu',
      content: 'I love corgis!',
    },
  ],
  comments: [
    {
      _id: 0,
      creator_name: 'Jessica Tang',
      parent: 0,
      content: 'Wow! Me Too!',
    },
  ],
};

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
/* router.all("*", (req, res) => {
   console.log(`API route not found: ${req.method} ${req.url}`);
   res.status(404).send({ msg: "API route not found" });
 }); */

// for all other routes, render index.html and let react router handle it

router.get('/test', (req, res) => {
  res.status(200).send({ message: 'is this working ahhh' });
});

router.get('/messages', (req, res) => {
  // send back all of the stories!
  res.send(data.stories);
});

router.get('/comment', (req, res) => {
  const filteredComments = data.comments.filter(
    (comment) => comment.parent == req.query.parent,
  );
  res.send(filteredComments);
});

router.post('/message', (req, res) => {
  const newMessage = {
    sender_mail: req.body.sender_mail,
    reciepient_mail: req.body.reciepient_mail,
    content: req.body.content,
    data: req.body.date,
  };

  data.stories.push(newStory);
  res.send(newStory);
});

module.exports = router;
