const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Address: {
      type: String,
    },
    total: {
      type: Number,
    },
    products: [
      {
        Name: {
          type: String,
        },
        ImageUrl: {
          type: String,
        },
        Description: {
          type: String,
        },
        Price: {
          type: Number,
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
      { timestamps: true },
    ],
  },
  { timestamps: true }
);

const OrdersModel = mongoose.model("Orders", orderSchema);

module.exports = OrdersModel;
