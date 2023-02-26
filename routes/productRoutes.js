const express = require("express");
const { getAllProducts, getProductById, addProducts, updateProducts, deleteProducts, dashboardProductsDetails } = require("../controllers/productControllers");
const router = express.Router();


router.get("/products", getAllProducts);

router.get("/product/:id", getProductById);

router.post("/products", addProducts);

router.put("/products/:id", updateProducts);

router.delete("/products/:id", deleteProducts);

router.get("/dashboard-total-products", dashboardProductsDetails);

module.exports = router;