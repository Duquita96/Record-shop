import db from "../db/db.js";

export const getRecords = async (req, res) => {
  const { records } = db.data;
  res.status(200).send(records);
};

export const createRecord = async (req, res) => {
  const { records } = db.data;
  records.push({ ...req.body, id: Date.now().toString() });
  await db.write();

  res.send(records);
};

export const getRecord = async (req, res, next) => {
  try {
    const { records } = db.data;
    let recordById = await records.find((v) => v.id === req.params.id);
    res.status(200).json(recordById);
  } catch (error) {
    next(error);
  }
};
export const updateRecord = async (req, res, next) => {
  try {
    const { records } = db.data;
    let record = await records.find((v) => v.id === req.params.id);
    const { title, artist, year, price } = req.body;
    record.title = title;
    record.artist = artist;
    record.year = year;
    record.price = price;
    await db.write();
    res.status(200).json(record);
  } catch (error) {
    next(error);
  }
};
export const deleteRecord = async (req, res, next) => {
  try {
    const { records } = db.data;
    let myId = await records.find((v) => v.id === req.params.id);
    const removeIndex = records.findIndex((item) => item.id === req.params.id);
    if (removeIndex != -1) {
      records.splice(removeIndex, 1);
    }
    await db.write();
    res.status(200).send(db.data);
  } catch (error) {
    next(error);
  }
};
