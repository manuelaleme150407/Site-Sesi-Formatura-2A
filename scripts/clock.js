const newYearDate = new Date("Dec 15, 2025 00:00:00").getTime();

const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const timeRemaining = newYearDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("message").innerText = "Feliz Ano Novo!";
  }
}, 1000);