const validateOrder = (req, res, next) => {
  const order = req.body;
  const Name = order.Name?.trim?.() ?? "";
  const Adresse = order.Adresse?.trim?.() ?? "";
  if (Name === "" || Adresse === "") {
    return res.status(404).json({ message: "Title is required" });
  }

  next();
};

module.exports = {
  validateOrder,
};
