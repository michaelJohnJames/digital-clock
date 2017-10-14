var box3 = document.getElementById('box3');
var box2 = document.getElementById('box2');
var clock = document.getElementById('clock');
var hideBox = function() { box3.classList.add("hidden") };
var showBox = function() { box3.classList.remove("hidden") };



function logTime() {

  var time = new Date();
  var hrs = time.getHours() > 9 ? time.getHours() : '0' + time.getMinutes();
  var min = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
  var sec = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();

  clock.innerHTML = (hrs + ':' + min + ':' + sec);

  var stringClock = ('#' + hrs.toString() + min.toString() + sec.toString());

  document.body.style.backgroundColor = stringClock;

}

var time = new Date();
var hrs = time.getHours() > 9 ? time.getHours() : '0' + time.getMinutes();
var min = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
var sec = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();

function redBox() {
  if ( sec != 00 ) {
  box3.classList.add("hidden");
}  else {  box3.classList.remove("hidden"); }
}

function flashRed() {
if ( sec >= 55 ) {
  box2.style.backgroundColor = red;
}
}



setInterval(logTime, 1000);
setInterval(redBox, 1000);
setInterval(flashRed, 1000);
