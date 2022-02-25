const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not specified",
    },
    director: {
        type: String,
        default: "Not specified",

    },
    language: {
        type: String,
        default: "Not specified",
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;