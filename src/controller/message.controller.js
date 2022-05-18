const boom = require("@hapi/boom");
const MessageSchema = require("../utils/models/message.model");

const getMessages = (filter) => {
  return new Promise(async (resolve, reject) => {
    const fill = filter ? { user: filter } : {};
    const allMessage = await MessageSchema.find(fill).populate("user")
    console.log(allMessage);
    resolve(allMessage);
  });
};

const addMessage = (message) => {
  return new Promise(async (b, m) => {
    try {
      if (!message) throw new boom.badData("No se obtuvo el mensaje");
      if (message && !message.user)
        throw new boom.badData("¿Quien mando el mensaje?");
      if (message && !message.message) throw new boom.badData("Que dijo?");

      const messageContent = {
        ...message,
        date: new Date(),
      };

      const newMessage = new MessageSchema(messageContent);
      await newMessage.save();
      b(messageContent);
    } catch (error) {
      m(error);
    }
  });
};

const updateMessage = (id, message) => {
  return new Promise(async (b, m) => {
    try {
      if (!id) throw new boom.notFound("No se obtuvo el id");
      if (!message) throw new boom.badData("No se obtuvo el mensaje");
      const messageContent = {
        ...message,
        date: new Date(),
      };
      const messageUpdated = await MessageSchema.findByIdAndUpdate(
        id,
        messageContent
      );
      if (!messageUpdated) throw new boom.notFound("No se encontro el mensaje");
      b(messageUpdated);
    } catch (error) {
      m(error);
    }
  });
};

const deleteMessage = (id) => {
  return new Promise(async (b, m) => {
    try {
      if (!id) throw new boom.notFound("No se obtuvo el id");
      const message = await MessageSchema.findByIdAndDelete(id);
      if (!message) throw new boom.notFound("No se encontro el mensaje");
      b(message);
    } catch (error) {
      m(error);
    }
  });
};

module.exports = {
  getMessages,
  addMessage,
  updateMessage,
  deleteMessage,
};
