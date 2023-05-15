/*
installez le plugin EJS language support

 UTILISATION DES TEMPLATES - MINI SITE

 Exercice
 utilisez ejs pour transformer vos trois documents HTML de la partie            2-Fichiers-statiques en template.
 Utilisez une convention de nommage différente pour les fichiers EJS et HTML
 (index.html donne index_ejs.ejs
 )
*/

// Importer le module Express
const express = require("express");
// Importer le module Express et créer une instance de l'application 
const app = require("express")();

// Définir le port d'écoute du serveur
const port = 3000;

// Vous spécifiez que vous utilisez le module EJS
app.set('view engine', 'ejs');

// Utiliser le dossier des fichiers statiques pour les fichiers EJS
app.set('views','folder');

// Appeler le fichier EJS
app.get("/", (req, res) =>{
    console.log("vue1")
    res.render('about.ejs')
 });

 app.get("/", (req, res) =>{
    console.log("vue1")
    res.render('contact.ejs')
 });

 app.get("/", (req, res) =>{
    console.log("vue1")
    res.render('index.ejs')
 });

// Démarrer le serveur et écouter sur le port spécifié, puis afficher un message dans la console
app.listen(port, () => {
    console.log(`Serveur1 en écoute sur le http://localhost:3000/`);
});
  