const { Schema, model } = require("mongoose");
const ChatSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = model("Chat", ChatSchema);
