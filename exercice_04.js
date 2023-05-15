/*
 UTILISATION DES FICHIERS STATIQUES 2
 */

/*
Vous pouvez déclarer autant de dossier statique que vous le souhaitez.
*/

/*
 Exercice
 */
/*

------ 1 ------
Créez deux dossiers à côté de votre fichier. Placez une image dans chaque dossier.

------ 2 ------
Déclarez successivement ces deux dossiers dans votre fichier JavaScript.

------ 3 ------
Quand l'utilisateur se connecte à votre serveur, envoyez-lui la balise image  correspondant au premier dossier.

------ 4 ------
S'il saisit le texte 'image' dans l'URL, affichez lui l'image correspondant au second dossier.
*/

// Importer le module Express
const express = require("express");
// Importer le module Express et créer une instance de l'application 
const app = require("express")();

// Définir le port d'écoute du serveur
const port = 3000;

// Utilissation d'un middleware pour servir les fichiers statiques du dossier 'images'
app.use("/img", express.static(__dirname + "/images"));
app.use("/img2", express.static(__dirname + "/image2"));

// Route pour la racine (GET sur "/") qui envoie une balise image
app.get("/", (requete, reponse) => {
    // Envoie la balise image avec l'attribut src pointant vers l'image "215697.jpg"
    reponse.send('<img src="/img/215697.jpg" alt="Image">');
});

// Route pour l'URL "/image" qui envoie la deuxieme image
app.get("/image", (requete, reponse) => {
    reponse.send('<img src="/img2/phase-runner-obivsvader-x.jpg" alt="Image">');
});

// Route pour l'URL "/quit" qui envoie un message texte
app.get("/quit", (requete, reponse) => {
    reponse.send("Ciao, voue etes sur/quit");
  });

// Démarrer le serveur et écouter sur le port spécifié, puis afficher un message dans la console
app.listen(port, () => {
    console.log(`Serveur1 en écoute sur le http://localhost:3000/ `);
});

