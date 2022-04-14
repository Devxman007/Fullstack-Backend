const productsService = require("../Services/products-services");

const listProducts = async (req, res) => {
  try {
    const products = await productsService.listProducts();
    res.setHeader("Total", products.length);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Erro" });
  }
};

const addProduct = async (req, res, next) => {
  const product = req.body;

  try {
    const saveProduct = await productsService.addProduct(product);
    if (!saveProduct) {
      res.status(404).json({ message: "" });
    }
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsService.getProduct(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const product = req.body;
  try {
    const updatedProduct = await productsService.updateProduct(
      productId,
      product
    );
    if (!updateProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    await productsService.deleteProduct(productId);
    res.status(204).send();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
};
