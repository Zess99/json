/*
balise EJS :
<% ... %> : Code JavaScript sans sortie HTML.
  <% var year = new Date().getFullYear(); %>

<%_ ... %> : Code JavaScript sans sortie HTML et suppression des espaces blancs avant la balise.
     <%_ var year = new Date().getFullYear(); %>

   <%= ... %> : Insérer du code JavaScript avec sortie HTML échappée.
  <p>Année actuelle : <%= year %></p>

<%- ... %> : Insérer du code JavaScript avec sortie HTML non échappée.
  <p>Description: <%- "<strong>Description en gras</strong>" %></p>

<%# ... %> : Commentaire qui n'est pas exécuté ni inclus dans la sortie HTML.
  <%# Ceci est un commentaire et n'apparaîtra pas dans le HTML généré %>

<%% : Afficher littéralement <% dans le modèle HTML.
  <%% Ceci affichera
  
TEMPLATE EJS - INCLUSION

Présentation
Pour éviter la répétition de plusieurs lignes de code similaires dans différents templates EJS, il est possible d'utiliser l'inclusion.
L'inclusion en EJS permet de diviser votre code en petits morceaux réutilisables que vous pouvez inclure dans plusieurs templates. 
Cela facilite la maintenance et la lisibilité du code. 
Pour inclure un fichier dans un template EJS, vous pouvez utiliser la directive <%- include('fichier') %>, où fichier est le nom du fichier EJS que vous souhaitez inclure.
https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-fr

*/

/*
Exercice

 1 
Reprenez le code de l'exercice précédent.
creez un dossier partials dans views
*/

// Importer le module Express
const express = require("express");
// Importer le module Express et créer une instance de l'application 
const app = express();

// Définir le port d'écoute du serveur
const port = 3000;

// Vous spécifiez que vous utilisez le module EJS
app.set('view engine', 'ejs');

// Utiliser le dossier des fichiers statiques pour les fichiers EJS
app.set('views','views');

// Appeler le fichier EJS
app.get("/about", (req, res) =>{
    console.log("vue1")
    res.render('about')
 });

 app.get("/contact", (req, res) =>{
    console.log("vue1")
    res.render('contact')
 });

 app.get("/", (req, res) =>{
    console.log("vue1")
    res.render('index')
 });

// Démarrer le serveur et écouter sur le port spécifié, puis afficher un message dans la console
app.listen(port, () => {
    console.log(`Serveur10 en écoute sur le http://localhost:3000/`);
});
  