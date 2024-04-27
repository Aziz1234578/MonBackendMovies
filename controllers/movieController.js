const Film = require("../models/movieModel");

exports.getTousFilms = async (req, res) => {
    try {
        const films = await Film.find();
        res.status(200).json(films);
    } catch (err) {
        res.status(500).json({ erreur: err.message });
    }
};

exports.getFilmParId = async (req, res) => {
    try {
        const film = await Film.findById(req.params.id);
        if (!film) {
            return res.status(404).json({ message: "Film introuvable" });
        }
        res.status(200).json(film);
    } catch (err) {
        res.status(500).json({ erreur: err.message });
    }
};

exports.creerFilm = async (req, res) => {
    const nouveauFilm = new Film(req.body);
    try {
        const filmSauvegarde = await nouveauFilm.save();
        res.status(200).json(filmSauvegarde);
    } catch (err) {
        res.status(400).json({ erreur: err.message });
    }
};

exports.modifierFilm = async (req, res) => {
    try {
        const filmModifie = await Film.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!filmModifie) {
            return res.status(404).json({ message: "Film introuvable" });
        }
        res.status(200).json(filmModifie);
    } catch (err) {
        res.status(400).json({ erreur: err.message });
    }
};

exports.supprimerFilm = async (req, res) => {
    try {
        const filmSupprime = await Film.findByIdAndDelete(req.params.id);
        if (!filmSupprime) {
            return res.status(404).json({ message: "Film introuvable" });
        }
        res.status(200).json(filmSupprime);
    } catch (err) {
        res.status(400).json({ erreur: err.message });
    }
};
