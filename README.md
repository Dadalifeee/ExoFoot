## Installation
1. Clonez ce dépôt
2. Exécutez `npm install` pour installer les dépendances
3. Lancez le serveur avec `node server.js`
4. Ouvrez `http://localhost:3000` dans votre navigateur

## Exercices

### Exercice 1 : Afficher les attaquants
Créez une fonction qui affiche uniquement les joueurs dont le poste est "Attaquant".

### Exercice 2 : Filtrer par club
Créez une fonction qui prend en paramètre le nom d'un club et affiche tous les joueurs de ce club.

### Exercice 3 : Trouver les joueurs par initiale
Créez une fonction qui prend en paramètre une lettre et affiche tous les joueurs dont le nom de famille commence par cette lettre.

### Exercice 4 : Compter les joueurs par poste
Créez une fonction qui compte et affiche le nombre de joueurs pour chaque poste.

### Exercice 5 : Trier les joueurs
Créez une fonction qui trie et affiche les joueurs par ordre alphabétique de leur nom de famille.

### Bonus : Recherche en temps réel
Implémentez une fonction de recherche qui permet de filtrer les joueurs en temps réel selon un texte saisi par l'utilisateur.

## Instructions
- Pour chaque exercice, créez une fonction distincte dans `script.js`.
- Utilisez les méthodes de tableau comme `filter()`, `map()`, `reduce()` quand c'est approprié.
- Affichez les résultats sur la page web.
- Gérez les cas où aucun joueur ne correspond aux critères.

## Interface Utilisateur
Ajoutez des boutons ou des champs de saisie sur la page HTML pour permettre à l'utilisateur d'interagir avec ces fonctions. Par exemple :

```html
<button onclick="displayAttackers()">Afficher les attaquants</button>
<button onclick="displayPlayersByClub('Paris Saint-Germain')">Joueurs du PSG</button>
<button onclick="displayPlayersByInitial('M')">Joueurs dont le nom commence par M</button>
<button onclick="countPlayersByPosition()">Compter les joueurs par poste</button>
<button onclick="displaySortedPlayers()">Trier les joueurs</button>
<button onclick="resetPlayersList()">Réinitialiser la liste</button>
<input type="text" id="searchInput" oninput="searchPlayers(this.value)" placeholder="Rechercher un joueur">