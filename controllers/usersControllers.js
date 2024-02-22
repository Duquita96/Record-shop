import db from "../db/db.js";

export const createUser = async (req, res, next) => {
  try {
    const { users } = db.data;

    users.push({ ...req.body, id: Date.now().toString() });
    await db.write();

    res.send(users);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const { users } = db.data;
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { users } = db.data;
    let userById = await users.find((v) => v.id === req.params.id);
    res.status(200).json(userById);
  } catch (error) {
    next(error);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const { users } = db.data;
    let user = await users.find((v) => v.id === req.params.id);
    const { firstName, lastName, email, password } = req.body;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    await db.write();
    res.status(200).json({ msg: "The user was successfully updated.!" });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const { users } = db.data;
    let myId = await users.find((v) => v.id === req.params.id);
    const removeIndex = users.findIndex((item) => item.id === req.params.id);
    if (removeIndex != -1) {
      users.splice(removeIndex, 1);
    }
    await db.write();
    res.status(200).json({ msg: "The user was successfully deleted.!" });
  } catch (error) {
    next(error);
  }
};
