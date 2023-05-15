/*
UTILISATION DES TEMPLATES - UTILISATION DE VARIABLES

Présentation

EJS permet de traiter le contenu d'une variable.
Dans la méthode res.render, on fournit un second argument sous la forme d'un objet. Chaque propriété de cet objet peut être utilisée dans le template de la façon suivante :
res.render(<nom du fichier>, {valeur1: 'un texte', valeur2 : 'un autre texte'})

template EJS :
Les balises <%= %> permettent d'insérer des variables dans le template.
<p><%= valeur1 %></p>
Ceci donnera <p>un texte<p> dans le document HTML transmis au client.
*/

/*
Exercice

------ 1 ------
Reprenez les documents de l'exercice précédent.

------ 2 ------
Transmettez le nom de la page et le titre du h1 dans l'objet passé en second argument de la méthode res.render et affichez-les dans votre document HTML envoyé au client.
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
app.set('views','views');

// Appeler le fichier EJS
app.get("/", (req, res) =>{
    console.log("vue1")
    res.render('valeur', {title: '<%= valeur1 %>', paragraph : '<%= valeur2 %>'})
 });

// Démarrer le serveur et écouter sur le port spécifié, puis afficher un message dans la console
app.listen(port, () => {
    console.log(`Serveur1 en écoute sur le http://localhost:3000/`);
});
  
