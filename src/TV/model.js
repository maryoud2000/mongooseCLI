const mongoose = require("mongoose");

const TVSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        default: "Not specified",
    },
    channel: {
        type: String,
        default: "Not specified",

    },
});

const TV = mongoose.model("TV", TVSchema);

module.exports = TV;