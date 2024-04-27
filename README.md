Une petite explication des fichiers composant le code :
server.js : Fichier principal qui configure le serveur Express et définit les routes pour l'API des films.
package.json : Fichier de configuration pour les dépendances du projet et les scripts, comme le démarrage de l'application.
.env : Fichier pour stocker des variables d'environnement sensibles comme les informations de connexion à la base de données. C'est mieux de les cacher dans des variables d'environnement que de les exposer dans les codes.
models/movieModel.js : Modèle de données pour les films, définissant leur structure en utilisant Mongoose.
routes/movieRoutes.js : Définition des routes HTTP pour gérer les opérations CRUD (Create, Read, Update, Delete) sur les films.
controllers/movieController.js : Contient les fonctions qui implémentent la logique métier pour manipuler les films.
config/dbConfig.js : Configuration de la connexion à la base de données MongoDB utilisée par l'application.
