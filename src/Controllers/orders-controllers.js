const ordersServices = require("../Services/orders-services");

const saveOrder = async (req, res) => {
  const order = req.body;

  try {
    const newOrder = await ordersServices.saveOrder(order);
    if (!newOrder) {
      res.status(404).json({ message: "kayn error" });
    }
    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  saveOrder,
};
