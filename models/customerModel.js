const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    customerImage:{
        type: String,
        required: true,
        trim: true,
    },
    customerName:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    mobileNumber:{
        type: String,
        required: true,
        trim: true,
    },
    address:{
        type: String,
        required: true,
        trim: true,
    },
    status:{
        type: String,
        required: true,
        trim: true,
    },
});


module.exports = mongoose.model("Customers", customerSchema);