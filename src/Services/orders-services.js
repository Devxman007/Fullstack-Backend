const Orders = require("../Models/orders");

const saveOrder = async (order) => {
  const newOrder = new Orders(order);
  await newOrder.save();
  return newOrder;
};

module.exports = {
  saveOrder,
};
