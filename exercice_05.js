/*
UTILISATION DES FICHIERS STATIQUES 3

Introduction

La méthode sendFile de l'objet réponse permet d'envoyer un fichier spécifique au client.
Elle s'utilise de la manière suivante :
res.sendFile('<nom_du_fichier>', options);
options: un objet contenant le dossier racine. Par exemple : {root: 'fichiers'}
*/

/*
Exercice

Étape 1 :
Créez un document HTML. Intégrez au moins header,un titre et une balise image.
Placez ce document et l'image dans un dossier.

Étape 2 :
Utilisez la méthode sendFile pour envoyer le fichier au client.
*/

// Importer le module Express
const express = require("express");
// Importer le module Express et créer une instance de l'application 
const app = require("express")();

// Définir le port d'écoute du serveur
const port = 3000;

// Utilissation d'un middleware pour servir les fichiers statiques du dossier 'images'
app.use("/img", express.static(__dirname + "/images"));

// Route pour la racine (GET sur "/") qui envoie une balise image
app.get("/", (requete, reponse) => {
    // Envoie le contenut de mon folder avec la méthode sendFile pointant vers le file "exercice_05.html"
    reponse.sendFile("exercice_05.html", { root: "html_img_05"});
});

// Démarrer le serveur et écouter sur le port spécifié, puis afficher un message dans la console
app.listen(port, () => {
    console.log(`Serveur1 en écoute sur le http://localhost:3000/ `);
});




