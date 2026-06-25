const hoursBox = document.querySelector("#box1");
const minutesBox = document.querySelector("#box2");
const secondsBox = document.querySelector("#box3");

function updateClock() {
  const time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  hoursBox.innerHTML = hours;
  minutesBox.innerHTML = minutes;
  secondsBox.innerHTML = seconds;
}

updateClock();

setInterval(updateClock, 1000);