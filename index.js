var box = document.getElementById('box');
var clock = document.getElementById('clock');



function logTime() {

  var time = new Date();
  var hrs = time.getHours() > 9 ? time.getHours() : '0' + time.getMinutes();
  var min = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
  var sec = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();

  clock.innerHTML = (hrs + ':' + min + ':' + sec);

  var stringClock = ('#' + hrs.toString() + min.toString() + sec.toString());

  var stringClock2 = (4 * ('#' + hrs.toString() + min.toString() + sec.toString()));

  document.body.style.backgroundColor = stringClock
  document.container.style.backgroundColor = stringClock2

}






setInterval(logTime, 1000);
