const express = require("express");
const { getAllCustomers, getCustomersById, addCustomers, updateCustomers, deleteCustomers, dashboardCustomersDetails } = require("../controllers/customerControllers");
const router = express.Router();

router.get("/customers", getAllCustomers);

router.get("/customers/:id", getCustomersById);

router.post("/customers", addCustomers);

router.put("/customers/:id", updateCustomers);

router.delete("/customers/:id", deleteCustomers);

router.get("/dashboard-total-customers", dashboardCustomersDetails);

module.exports = router;