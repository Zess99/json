/*
GÉRER LES POSTS
*/

/*
Lorsqu'une requête post est utilisée, les données envoyées ne sont pas présentes dans l'url. Le traitement de ces données dans les requêtes en post se fait d'une façon un peu différente des requêtes avec la méthode get.
Il faut utiliser le module body-parser. Après avoir fait un require de ce dernier, on utilise la fonction middleware :
app.use(bodyParser.urlencoded({
  extended: false
}));
Vous trouverez l'ensemble des options sur la page suivante : https://github.com/expressjs/body-parser

À partir de là, on peut utiliser dans la fonction de retour de la gestion du post (app.post) la propriété body de l'objet req qui contient autant de propriétés que de nombres d'éléments envoyés par la soumission du formulaire.

*/

/*
Exercice

------ 1 ------
Reprenez le code de l'exercice 10 ou de l'exercice 11.
------ 2 ------
Créez une nouvelle page correspondant à un nouveau template comprenant un formulaire avec deux champs (nom et prénom).
------ 3 ------
Traitez l'envoi du formulaire pour afficher dans une autre page le prénom et le nom saisis.
*/

// Importer le module Express
const express = require("express");
// Importer le module Express et créer une instance de l'application 
const app = express();

const bodyParser = require('body-parser')


// Définir le port d'écoute du serveur
const port = 3000;

// Vous spécifiez que vous utilisez le module EJS
app.set('view engine', 'ejs');

// Utiliser le dossier des fichiers statiques pour les fichiers EJS
app.set('views','views');

// Appeler le fichier EJS
app.get("/newTemplate", (req, res) => {
    // console.log(req.query); // affiche 'formulaire'
});
app.get("/linkNewTemplate", (req, res) => {
    console.log(req.query); // affiche 'linkNewTemplate'
    res.render("linkNewTemplate",{nom: req.query.user_name, firstname: req.query.user_prenom})
});

 app.use(bodyParser.urlencoded({
  type: 'text/ejs'
}));

// Démarrer le serveur et écouter sur le port spécifié, puis afficher un message dans la console
app.listen(port, () => {
    console.log(`Serveur10 en écoute sur le http://localhost:3000/`);
});
  