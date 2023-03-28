var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;
var timer = false;
// Start button function
function start() {
  timer = true;
  stopwatch();
}
function stop() {
  timer = false;
  stopwatch();
}
// Reset Button function
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("ms").innerHTML = "00";
}
// Stop button function
function stopwatch() {
  if (timer == true) {
    ms++;
    if (ms == 100) {
      ms = 0;
      sec++;
    }
    if (sec == 60) {
      sec = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hr++;
    }
  }
  hrout = hr;
  minout = min;
  secout = sec;
  msout = ms;
  if (hr <= 10) {
    hrout = "0" + hr;
  }
  if (min <= 10) {
    minout = "0" + min;
  }
  if (sec <= 10) {
    secout = "0" + sec;
  }
  if (ms <= 10) {
    msout = "0" + ms;
  }
  document.getElementById("ms").innerHTML = msout;
  document.getElementById("sec").innerHTML = secout;
  document.getElementById("min").innerHTML = minout;
  document.getElementById("hr").innerHTML = hrout;
  setTimeout("stopwatch(),10");
}
