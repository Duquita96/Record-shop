import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import recordsRoutes from "./routes/recordsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import ordersRoutes from "./routes/ordersRoutes.js";

const app = express();

//Middlewares
app.use(cors());
app.use(morgan("dev")); //logs all requests made on the server
app.use(express.urlencoded({ extended: false }));

//Env variables
dotenv.config();
const PORT = process.env.PORT;

//Routes
app.use("/api/records", recordsRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/users", usersRoutes);

//Error handlers
app.use((req, res, next) => {
  const error = new Error("Hey! Page not Found!");
  error.status = 404;
  next(error);
});

//Global Error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: { message: error.message },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: `, PORT);
});
