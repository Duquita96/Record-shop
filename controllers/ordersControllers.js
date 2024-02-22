import db from "../db/db.js";

export const getOrders = async (req, res) => {
  const { orders } = db.data;
  res.status(200).send(orders);
};

export const createOrder = async (req, res) => {
  const { orders } = db.data;
  orders.push({ ...req.body, id: Date.now().toString() });
  await db.write();

  res.send(orders);
};

export const getOrder = async (req, res, next) => {
  try {
    const { orders } = db.data;
    let order = await orders.find((v) => v.id === req.params.id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};
export const updateOrder = async (req, res, next) => {
  try {
    const { orders } = db.data;
    let order = await orders.find((v) => v.id === req.params.id);
    const { quantity, record_id } = req.body;
    order.quantity = quantity;
    order.record_id = record_id;
    await db.write();
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};
export const deleteOrder = async (req, res, next) => {
  try {
    const { orders } = db.data;
    let myId = await users.find((v) => v.id === req.params.id);
    const removeIndex = orders.findIndex((item) => item.id === req.params.id);

    if (removeIndex != -1) {
      orders.splice(removeIndex, 1);
    }
    await db.write();
    res.status(200).send("Order deleted!");
  } catch (error) {
    next(error);
  }
};
