let running = false;
let startTime = 0;
let interval;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const pauseResumeButton = document.getElementById("pauseResume");

startStopButton.addEventListener("click", function () {
  if (running) {
    clearInterval(interval);
    startStopButton.textContent = "Iniciar";
    pauseResumeButton.textContent = "Pausar";
  } else {
    startTime = Date.now() - (startTime ? startTime : 0);
    startStopButton.textContent = "Detener";
    pauseResumeButton.textContent = "Pausar";
  }
  running = !running;
  paused = false;
});

pauseResumeButton.addEventListener("click", function () {
  if (running) {
    if (paused) {
      startTime = Date.now() - pausedTime;
      interval = setInterval(updateDisplay, 10);
      pauseResumeButton.textContent = "Pausar";
    } else {
      clearInterval(interval);
      pausedTime = Data.now() - startTime;
      pauseResumeButton.textContent = "Reanudar";
    }
    paused = !paused;
  }
});

resetButton.addEventListener("click", function () {
  clearInterval(interval);
  startStopButton.textContent = "Iniciar";
  pauseResumeButton.textContent = "Pausar";
  display.textContent = "00:00:00";
  startTime = 0;
  pausedTime = 0;
  running = false;
  paused = false;
});

function updateDisplay() {
  const currentTime = Date.now() - startTime;
  const hours = Math.floor(currentTime / 3600000);
  const minutes = Math.floor((currentTime % 3600000) / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);
  const milliseconds = currentTime % 1000;
  display.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(
    seconds
  )}`;
}
function padZero(num) {
  return num.toString().padStart(2, "0");
}
