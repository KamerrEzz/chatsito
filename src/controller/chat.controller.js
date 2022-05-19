const ChatSchema = require("../utils/models/chat.model");
const boom = require("@hapi/boom");

const addChat = (users) => {
  return new Promise((resolve, reject) => {
    ChatSchema.create(users, (err, data) => {
      if (err) {
        return reject(boom.badRequest(err));
      }
      return resolve(data);
    });
  });
};

const listChat = (userId) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId) {
      filter = {
        $or: [
          {
            "user.0": userId,
          },
          {
            "user.1": userId,
          },
        ],
      };
    }
    const chats = ChatSchema.find(filter).populate("User");
    resolve(chats);
  });
};

module.exports = {
  addChat,
  listChat,
};
