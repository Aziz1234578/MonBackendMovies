const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.getTousFilms);
router.get("/:id", movieController.getFilmParId);
router.post("/", movieController.creerFilm);
router.put("/:id", movieController.modifierFilm);
router.delete("/:id", movieController.supprimerFilm);

module.exports = router;
