import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/usersControllers.js";

const router = express.Router();

//http://localhost:5000/api/users/
router.route("/").get(getUsers).post(createUser);

//http://localhost:5000/api/users/some_id
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
