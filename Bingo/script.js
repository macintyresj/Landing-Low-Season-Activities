/** @format */

// Valores fijos
const POINTS_PER_TICKET = 10000; // 10.000 pts por cartón

// Elementos DOM
const ticketsInput = document.getElementById("tickets");
const bingoAmountEl =
  document.querySelector("#bingo-value .amount") ||
  document.getElementById("bingo-value");
const line1AmountEl = document.querySelector("#line1-value .amount");
const lineSAmountEl = document.querySelector('#lineS-value .amount');
const collectedAmountEl = document.getElementById("collected-amount");

// formato de número con separador de miles
function fmt(n) {
  // queremos mostrar entero sin decimales
  return n.toLocaleString("es-AR");
}

// Animación para contar números hacia arriba (odómetro)
function animateValue(element, start, end, duration) {
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // easing suave
    const eased = progress * (2 - progress);

    const value = Math.floor(start + (end - start) * eased);
    element.textContent = fmt(value);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function calculateAndRender(cartones) {
  // Normalizar entrada
  cartones = Math.max(0, Math.floor(Number(cartones) || 0));

  // Cálculo de puntos
  const total = cartones * POINTS_PER_TICKET;

  const bingo = Math.floor(total * 0.80 / 4);
  const line1 = Math.floor(total * 0.20 / 4);
  const lineS = Math.floor(total * 0.20 / 2);
  // Valores actuales mostrados (para animar desde ahí)
  const currentBingo =
    parseInt(bingoAmountEl.textContent.replace(/\./g, "")) || 0;
  const currentLine1 =
    parseInt(line1AmountEl.textContent.replace(/\./g, "")) || 0;
  const currentLineS =
    parseInt(lineSAmountEl.textContent.replace(/\./g, "")) || 0;  
  const currentTotal =
    parseInt(collectedAmountEl.textContent.replace(/\./g, "")) || 0;

  // Animar hacia el nuevo valor
  animateValue(bingoAmountEl, currentBingo, bingo, 2000);
  animateValue(line1AmountEl, currentLine1, line1, 2000);
  animateValue(lineSAmountEl, currentLineS, lineS, 2000);
  animateValue(collectedAmountEl, currentTotal, total, 2000);
}

// inicializar con 0
calculateAndRender(0);
// evento: actualizar al escribir
ticketsInput.addEventListener("input", (e) => {
  const v = e.target.value;
  calculateAndRender(v);
});

// accesibilidad: permitir flechas y up/down
ticketsInput.addEventListener("change", (e) => {
  calculateAndRender(e.target.value);
});





