const games = [
    {
    title: "Aproximation",
    image: "",
    link: "",
  },
  {
    title: "Jeopardy",
    image: "assets/img/jeopardy.png",
    link: "https://macintyresj.github.io/FSO-Games-Trivia-Tablero-/",
  },
  {
    title: "Preguntados",
    image: "assets/img/preguntados.png",
    link: "https://macintyresj.github.io/FSO-Games-Trivia/",
  },
 {
    title: "Escape Rooms",
    image: "assets/img/escapeRoom.png",
    link: "Escape_Room.html",
  },
  {
    title: "First Shout",
    image: "assets/img/firstshout.png",
    link: "https://macintyresj.github.io/FSO-Games---First-Shout/",
  }
  { 
    title: "I sit, I stand",
    image: "assets/img/GettyImages-553017003.jpg",
    link: "https://macintyresj.github.io/FSO-Games-Trivia-Tablero-/",
  },

];
// Crear bloques de color
const bg = document.querySelector('.color-blocks');
for (let i = 0; i < 8; i++) {
  const div = document.createElement('div');
  bg.appendChild(div);
}

const container = document.getElementById('games-container');

games.forEach(game => {
  const card = document.createElement('div');
  card.className = 'game-card';
  card.innerHTML = `
    <img src="${game.image}" alt="${game.title}">
    <h3>${game.title}</h3>
  `;
  card.addEventListener('click', () => window.open(game.link, '_blank'));
  container.appendChild(card);
});



