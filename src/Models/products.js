const mongoose = require("mongoose");

const ProductShema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    ImageUrl: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
    },
    Price: {
      type: Number,

      required: true,
    },
    Brand: {
      type: String,
    },
    Category: {
      type: String,
    },
    Rating: {
      type: Number,
      default: 0,
    },
    Reviews: {
      type: Number,
      default: 0,
    },
    Quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", ProductShema);
module.exports = ProductModel;
