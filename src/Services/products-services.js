const Product = require("../Models/products");

const listProducts = async (req, res) => {
  const products = await Product.find().lean().exec();
  return products;
};

const addProduct = async (product) => {
  const newProduct = new Product(product);
  await newProduct.save();
  return newProduct;
};

const updateProduct = async (productId, product) => {
  const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
    returnDocument: "after",
  })
    .lean()
    .exec();
  return updatedProduct;
};

const getProduct = async (id) => {
  const product = await Product.findById(id).lean().exec();
  return product;
};
const deleteProduct = async (productId) => {
  await Product.findByIdAndDelete(productId).exec();
};
module.exports = {
  listProducts,
  addProduct,
  updateProduct,
  getProduct,
  deleteProduct,
};
