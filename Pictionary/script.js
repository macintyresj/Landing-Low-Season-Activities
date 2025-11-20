let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let restartBtn = document.getElementById('restart');

let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let centisDisplay = document.getElementById('centis'); // nuevo span para centésimas

let totalCentis = 6000; // 3 minutos = 18000 centésimas (3*60*100)
let interval;

// Función para actualizar la pantalla
function updateDisplay() {
    let mins = Math.floor(totalCentis / 6000);
    let secs = Math.floor((totalCentis % 6000) / 100);
    let centis = totalCentis % 100;

    minutesDisplay.textContent = mins < 10 ? "0" + mins : mins;
    secondsDisplay.textContent = secs < 10 ? "0" + secs : secs;
    centisDisplay.textContent = centis < 10 ? "0" + centis : centis;
}

// Mostrar pop-up inicial
startGameBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    updateDisplay();
});

// START
startBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        if (totalCentis > 0) {
            totalCentis--;
            updateDisplay();
        } else {
            clearInterval(interval);
            alert("⏰ ¡Tiempo terminado!");
        }
    }, 10); // actualiza cada 10ms
});

// PAUSE
pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
});

// RESTART
restartBtn.addEventListener('click', () => {
    clearInterval(interval);
    totalCentis = 6000;
    updateDisplay();
});


