const validProduct = (req, res, next) => {
  const product = req.body;

  const Name = product.Name?.trim?.() ?? "";
  const ImageUrl = product.ImageUrl?.trim?.() ?? "";
  const Price = Number.isInteger(product.Price);

  if (Name === "" || ImageUrl === "") {
    return res
      .status(404)
      .json({ message: "Please add all the required info" });
  }
  next();
};

module.exports = {
  validProduct,
};
