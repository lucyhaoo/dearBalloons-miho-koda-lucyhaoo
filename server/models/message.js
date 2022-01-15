const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    sender: {
        email: String,
        name: String,
      },
      recipient: {
        email: String,
        name: String,
      },
      date: String,
      content: String

});

module.exports = mongoose.model("message", MessageSchema);
