const express = require("express");
const connectDB = require("./config/dbConfig");
const movieRoutes = require("./routes/movieRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

// Connexion à MongoDB
connectDB();

app.use(express.json());

app.use("/films", movieRoutes);

app.listen(port, () => {
    console.log(`Serveur en cours sur http://localhost:${port}`);
});
