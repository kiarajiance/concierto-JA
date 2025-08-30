const concertDate = new Date("August 30, 2025 17:00:00").getTime();
const countdownEl = document.getElementById("countdown");
const btnPrograma = document.getElementById("btn-programa"); // tu botón

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = concertDate - now;

  if (distance <= 0) {
    clearInterval(interval);
    countdownEl.innerHTML = "¡El concierto ya comenzó!";

    // Mostrar el botón
    btnPrograma.style.display = "inline-block"; // se puede usar "block" también
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
