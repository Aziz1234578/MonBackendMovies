const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connecté à MongoDB");
    } catch (err) {
        console.error("Erreur de connexion à MongoDB :", err);
        process.exit(1);
    }
};

module.exports = connectDB;
