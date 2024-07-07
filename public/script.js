let players = [];
let currentPlayers = [];

// Charger les données des joueurs
document.addEventListener('DOMContentLoaded', () => {
    fetch('players.json')
        .then(response => response.json())
        .then(data => {
            players = data.joueurs;
            currentPlayers = [...players];
            displayPlayers(currentPlayers);
        })
        .catch(error => console.error('Erreur lors du chargement des données:', error));
});

function createPlayerCard(player) {
  const col = document.createElement('div');
  col.className = 'col-md-4 col-lg-3';

  const card = document.createElement('div');
  card.className = 'card player-card';

  const img = document.createElement('img');
  img.src = player.url || 'https://via.placeholder.com/300x200.png?text=Photo+non+disponible';
  img.className = 'card-img-top player-image';
  img.alt = `${player.prenom} ${player.nom}`;

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const name = document.createElement('h5');
  name.className = 'card-title';
  name.textContent = `${player.prenom} ${player.nom}`;

  const club = document.createElement('p');
  club.className = 'card-text';
  club.textContent = player.club;

  const position = document.createElement('span');
  position.className = 'badge bg-primary';
  position.textContent = player.poste;

  cardBody.appendChild(name);
  cardBody.appendChild(club);
  cardBody.appendChild(position);

  card.appendChild(img);
  card.appendChild(cardBody);

  col.appendChild(card);

  return col;
}

// Fonction d'affichage générique
function displayPlayers(playersList) {
    const container = document.getElementById('players-list');
    container.innerHTML = ''; // Vider le conteneur

    if (playersList.length === 0) {
        container.innerHTML = '<p>Aucun joueur trouvé.</p>';
        return;
    }

    playersList.forEach(player => {
        const playerCard = createPlayerCard(player);
        container.appendChild(playerCard);
    });
}

function resetPlayersList() {
  currentPlayers = [...players];
  displayPlayers(currentPlayers);
}