const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const productsRoute = require("./Routes/products");
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/admin", productsRoute);

const connectDb = () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log(`Database connected`);
  } catch (error) {
    console.log(error);
  }
};
app.listen(PORT || 4000, () => {
  console.log(`Listening on port ${PORT}`);
  connectDb();
});

module.exports = app;
