const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir les fichiers statiques depuis le répertoire 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Servir players.json
app.get('/players.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'players.json'));
});

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});