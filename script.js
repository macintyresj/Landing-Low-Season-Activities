const games = [
    {
    title: "Aproximation",
    image:  "assets/img/Aproximation.jpg",
    link: "https://people.ey.com/personal/agustin_villar_gds_ey_com/_layouts/15/onedrive.aspx?viewid=65e0aea4%2De09d%2D48f5%2Da83f%2Db5e77e7fea96&ga=1&id=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FAproximacion%2FAproximation%20%2D%20Instructions%2Epdf&parent=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FAproximacion",
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
  },
  {
    title: "Act it out",
    image: "assets/img/charades.jpg",
    link: "https://people.ey.com/personal/agustin_villar_gds_ey_com/_layouts/15/onedrive.aspx?viewid=65e0aea4%2De09d%2D48f5%2Da83f%2Db5e77e7fea96&ga=1&id=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FDigalo%20con%20Mimica%2Finstructions%2Epdf&parent=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FDigalo%20con%20Mimica",
  },
 {
    title: "The Word Game",
    image: "assets/img/wordGame.png",
    link: "https://people.ey.com/personal/agustin_villar_gds_ey_com/_layouts/15/onedrive.aspx?viewid=65e0aea4%2De09d%2D48f5%2Da83f%2Db5e77e7fea96&ga=1&id=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FEl%20juego%20de%20las%20palabras%2FThe%20word%20game%20%2D%20Instructions%2Epdf&parent=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FEl%20juego%20de%20las%20palabras",
  },
  { 
    title: "I sit, I stand",
    image: "assets/img/GettyImages-553017003.jpg",
    link: "https://people.ey.com/:p:/r/personal/agustin_villar_gds_ey_com/_layouts/15/Doc.aspx?sourcedoc=%7BAE5E303D-23D6-4500-A296-B62CEC1F1232%7D&file=FSO%20Games%20-%20Support.pptx&action=edit&mobileredirect=true",
  },
      {
    title: "T-Shirt Game",
    image: "assets/img/TshirtGame.jpg",
    link: "https://people.ey.com/personal/agustin_villar_gds_ey_com/_layouts/15/onedrive.aspx?viewid=65e0aea4%2De09d%2D48f5%2Da83f%2Db5e77e7fea96&ga=1&id=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FPoner%20camiseta%2FT%2Dshirt%20change%20istructions%2Epdf&parent=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FPoner%20camiseta",
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







