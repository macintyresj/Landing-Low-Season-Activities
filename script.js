const games = [
  {
    title: "Random Name Generator",
    image: "assets/img/name.png",
    link: "assets/img/Nombre.png"
  },
    {
    title: "Aproximation",
    image:  "assets/img/Aproximation.jpg",
    link: "https://people.ey.com/personal/agustin_villar_gds_ey_com/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FAproximacion%2Fpreguntas%2Epdf&viewid=65e0aea4%2De09d%2D48f5%2Da83f%2Db5e77e7fea96&parent=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FAproximacion",
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
    link: "actItOut/actItOut.html",
  },
 {
    title: "The Word Game",
    image: "assets/img/wordGame.png",
    link: "https://people.ey.com/personal/agustin_villar_gds_ey_com/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FEl%20juego%20de%20las%20palabras%2FEl%20juego%20de%20las%20palabras%20%2D%20Instrucciones%2Epdf&viewid=65e0aea4%2De09d%2D48f5%2Da83f%2Db5e77e7fea96&parent=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FEl%20juego%20de%20las%20palabras",
  },
      {
    title: "T-Shirt Game",
    image: "assets/img/TshirtGame.jpg",
    link: "https://people.ey.com/personal/agustin_villar_gds_ey_com/_layouts/15/onedrive.aspx?viewid=65e0aea4%2De09d%2D48f5%2Da83f%2Db5e77e7fea96&ga=1&id=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FPoner%20camiseta%2FT%2Dshirt%20change%20istructions%2Epdf&parent=%2Fpersonal%2Fagustin%5Fvillar%5Fgds%5Fey%5Fcom%2FDocuments%2FFY%2026%2FADMIN%2FACTIVIDADES%2FPoner%20camiseta",
  },
 {
    title: "Guess the movie",
    image: "assets/img/guessTheMovie.png",
    link: "https://people.ey.com/:p:/r/personal/agustin_villar_gds_ey_com/_layouts/15/Doc.aspx?sourcedoc=%7B2C42E053-9DA4-40AA-B0A1-46C960F99CB0%7D&file=Presentaci%C3%B3n1.pptx&action=edit&mobileredirect=true",     
  },
     {
    title: "Bingo",
    image: "assets/img/bingo.png",
    link: "Bingo/index.html",     
  },
    {
    title: "Pictionary",
    image: "assets/img/pictionary.png",
    link: "Pictionary/pictionary.html"
  },
 {
    title: "The Numbers Game",
    image: "assets/img/numbers.png",
    link: "",     
  },
{ 
    title: "I sit, I stand",
    image: "assets/img/GettyImages-553017003.jpg",
    link: "assets/img/De pie o sentado.png",
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






















