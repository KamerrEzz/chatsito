const { Schema, model } = require("mongoose");
const MessageSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

module.exports = model("Message", MessageSchema);
