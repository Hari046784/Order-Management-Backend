const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    brand:{
        type: String,
        required: true,
        trim: true,
    },
    category:{
        type: String,
        required: true,
        trim: true,
    },
    productName:{
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number,
        required: true,
        trim: true,
    },
    stock:{
        type: Number,
        required: true,
        trim: true,
    },
    productImage:{
        type: String,
        required: true,
        trim: true,
    },
});


module.exports = mongoose.model("Products", productSchema);