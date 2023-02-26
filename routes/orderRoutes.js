const express = require("express");
const { getAllOrders, getOrderById, addOrders, updateOrders, deleteOrders, dashboardOrdersDetails } = require("../controllers/orderControllers");
const router = express.Router();


router.get("/orders", getAllOrders);

router.get("/orders/:id", getOrderById);

router.post("/orders", addOrders);

router.put("/orders/:id", updateOrders);

router.delete("/orders/:id", deleteOrders);

router.get("/dashboard-total-orders", dashboardOrdersDetails);

module.exports = router;