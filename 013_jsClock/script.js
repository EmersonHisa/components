window.onload = function () {
  let seconds = 0;
  let tens = 0;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");
  let Interval;
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };
  buttonReset.onclick = function () {
    clearInterval(Interval);
    seconds = 0;
    tens = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
  };
  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    } else if (tens > 9 && tens <= 99) {
      appendTens.innerHTML = tens;
    } else {
      tens = 0;
      seconds++;
      if (seconds <= 9) {
        appendSeconds.innerHTML = "0" + seconds;
      } else {
        appendSeconds.innerHTML = seconds;
      }
    }
  }
};
