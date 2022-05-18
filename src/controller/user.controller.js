const userSchema = require("../utils/models/user.model");
const boom = require("@hapi/boom");

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const allUsers = await userSchema.find();
    resolve(allUsers);
  });
};
const getUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await userSchema.findById(id);
      if (!user) throw boom.notFound("No se encontro el usuario");
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};
const createUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!user) throw boom.badData("No se obtuvo el usuario");
      if (!user.name) throw boom.badData("No se obtuvo el nombre");
      if (!user.lastname) throw boom.badData("No se obtuvo el apellido");
      const newUser = new userSchema(user);
      await newUser.save();
      resolve(newUser);
    } catch (error) {
      reject(error);
    }
  });
};
const updateUser = (id, user) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) throw boom.notFound("No se obtuvo el id");
      if (!user) throw boom.badData("No se obtuvo el usuario");
      const userUpdated = await userSchema.findByIdAndUpdate(id, user);
      if (!userUpdated) throw boom.notFound("No se encontro el usuario");
      resolve(userUpdated);
    } catch (error) {
      reject(error);
    }
  });
};
const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) throw boom.notFound("No se obtuvo el id");
      const user = await userSchema.findByIdAndDelete(id);
      if (!user) throw boom.notFound("No se encontro el usuario");
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
