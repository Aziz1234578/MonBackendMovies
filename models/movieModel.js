const mongoose = require("mongoose");

const schemaFilm = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    realisateur: String,
    annee: Number
});

const Film = mongoose.model("Film", schemaFilm);

module.exports = Film;
