//Importing the dotenv module
require("dotenv").config();

//Importing the express module
const express = require("express");

//Initializing the express
const app = express();

//Importing the cors
const cors = require("cors");

//Importing the db
const db = require("./db/connect");

// Calling the express.json() method for parsing and call cors
app.use(express.json());
app.use(cors());

//To connect db
db();

// Importing the routes
const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

//Adding the custom middleware
app.use("/api/auth", authRoutes);
app.use("/api", customerRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

// Testing
app.get("/", (req, res)=>{
    res.status(200).send("Welcome to My Order Management Application...😊")
})

//Initializing the port
const PORT = process.env.PORT || 8081;

app.listen(PORT, ()=>{
    console.log(`Application is running on PORT ${PORT}`);
});