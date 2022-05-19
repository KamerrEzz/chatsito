const { Schema, model } = require("mongoose");
const ChatSchema = new Schema({
  users: [{
    type: Schema.ObjectId,
    ref: "User"
  }]
});

module.exports = model("Chat", ChatSchema);
