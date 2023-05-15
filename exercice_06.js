/*
ROUTES ET FICHIERS STATIQUES PERSONNALISÉS

En explorant la gestion des routes et l'intégration des fichiers statiques, vous allez créer un petit site web avec Express.js.
*/

/*
Exercice

Dans un dossier public, créez trois documents HTML (index, about et contact )  :
Chaque document doit contenir un titre  un menu de navigation, une balise image et un footer.
Utilisez le même fichier CSS pour les trois documents afin d'assurer une apparence cohérente,
Prévoyez une image d'en-tête à inclure dans chacun des documents.
Intégrez un menu de navigation dans chacune des trois pages, comprenant trois liens : index, about et contact  Page 1 et Page 2. Ces liens permettront de naviguer entre les différentes pages.
Utilisez un middleware app.use() pour servir les fichiers statiques et trois gestionnaires de routes app.get() pour chacune des pages.
*/
// Importer le module Express
const express = require("express");
// Importer le module Express et créer une instance de l'application 
const app = require("express")();

// Définir le port d'écoute du serveur
const port = 3000;

// Utilissation d'un middleware pour servir les fichiers statiques du dossier 'images'
//app.use("/img", express.static(__dirname + "/public/images"));
app.use(express.static("public"));
app.use(express.static("image2"));
app.use(express.static("images1"));

// Route pour la racine (GET sur "/") qui envoie une balise image
app.get("/about", (requete, reponse) => {
    // Envoie le contenut de mon folder avec la méthode sendFile pointant vers le file "exercice_05.html"
    reponse.sendFile("about.html", { root: "public"});
});

// Route pour la racine (GET sur "/") qui envoie une balise image
app.get("/contact", (requete, reponse) => {
    // Envoie le contenut de mon folder avec la méthode sendFile pointant vers le file "exercice_05.html"
    reponse.sendFile("contact.html", { root: "public"});
});

// Route pour la racine (GET sur "/") qui envoie une balise image
app.get("/", (requete, reponse) => {
    // Envoie le contenut de mon folder avec la méthode sendFile pointant vers le file "exercice_05.html"
    reponse.sendFile("index.html", { root: "public"});
});


// Démarrer le serveur et écouter sur le port spécifié, puis afficher un message dans la console
app.listen(port, () => {
    console.log(`Serveur1 en écoute sur le http://localhost:3000/ `);
});
