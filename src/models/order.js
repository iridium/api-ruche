const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    adresse: {
        type: String,
        required: true,
    },
    number:{ // Numéro de téléphone
        type: String,
        required: true,
    },
    deliveryTime:{
        type: Date,
        required: true,
    },
    comments: {
        type: String,
        required: false,
    },
    products: [{
        type: mongoose.Schema.ObjectId,
        ref: "product",
    }],
    deliveryMan: {
        type: mongoose.Schema.ObjectId,
        ref: "deliveryMan"
    },
    status: {
        type: String,
        default: "WAITING" // WAITING, ACCEPTED, DELIVERED
    }
}, {timestamps: true});

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;