import express from "express";
import {
  createRecord,
  deleteRecord,
  getRecord,
  getRecords,
  updateRecord,
} from "../controllers/recordsControllers.js";

const router = express.Router();

//http://localhost:5000/api/records/
router.route("/").get(getRecords).post(createRecord);

//http://localhost:5000/api/records/some_id
router.route("/:id").get(getRecord).put(updateRecord).delete(deleteRecord);

export default router;
