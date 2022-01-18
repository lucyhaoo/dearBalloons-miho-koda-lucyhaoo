/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

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
  const recipient = req.body.recipientEmail;
  const content = req.body.contentEmail;
  let sendMsg = {
    from: personalEmail,
    to: recipient,
    subject: "",// TODO
    text: content,
  }

  // mongo
  const newEmail = new Email({})
  const data = {
    stories: [
      {
        _id: 0,
        creator_name: "Shannen Wu",
        content: "I love corgis!"
      }
    ],
    comments: [
      {
        _id: 0,
        creator_name: "Jessica Tang",
        parent: 0,
        content: "Wow! Me Too!",
      }
    ],
  };


});


// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
// router.all("*", (req, res) => {
//   console.log(`API route not found: ${req.method} ${req.url}`);
//   res.status(404).send({ msg: "API route not found" });
// });

// for all other routes, render index.html and let react router handle it

router.get("/test", (req, res) => {
  res.status(200).send({ message: "is this working ahhh" });
});

router.get("/stories", (req, res) => {
  // send back all of the stories!
  res.send(data.stories);
});

router.get("/comment", (req, res) => {
  const filteredComments = data.comments.filter(
    (comment) => comment.parent == req.query.parent);
  res.send(filteredComments)
});
 

module.exports = router;
