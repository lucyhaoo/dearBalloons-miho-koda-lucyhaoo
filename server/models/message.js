const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    sender_mail: String,
    recipient_mail: String,
    content: String,
    date: Date

});

module.exports = mongoose.model("message", MessageSchema);
