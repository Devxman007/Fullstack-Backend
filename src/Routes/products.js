const express = require("express");

const router = express.Router();
const productController = require("../Controllers/products-controllers");
const orderController = require("../Controllers/orders-controllers");
const productMiddleware = require("../Middlewares/products-middleware");
const orderMiddleware = require("../Middlewares/orders-middleware");

router.get("/", productController.listProducts);
router.get("/:id", productController.getProduct);
router.post("/", productMiddleware.validProduct, productController.addProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.post("/order", orderController.saveOrder);

module.exports = router;
