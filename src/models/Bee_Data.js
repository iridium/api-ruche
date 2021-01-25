const mongoose = require("mongoose");

const BeeDataSchema = new mongoose.Schema({
    poids: {
        type: Number,
        required: true,
    },
    temp: {
        type: Number,
        required: true,
    },
    humidity: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

const BeeDataModel = mongoose.model("BeeData", BeeDataSchema);

module.exports = BeeDataModel;