import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "../controllers/ordersControllers.js";

const router = express.Router();

//http://localhost:5000/api/records/
router.route("/").get(getOrders).post(createOrder);

//http://localhost:5000/api/orders/some_id
router.route("/:id").get(getOrder).put(updateOrder).delete(deleteOrder);

export default router;
