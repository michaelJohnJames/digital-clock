var box = document.getElementById('box')
var clock = document.getElementById('clock')


function logTime() {

  var time = new Date();
  var hrs = time.getHours() > 9 ? time.getHours() : '0' + time.getMinutes();
  var min = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
  var sec = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();

  clock.innerHTML = (hrs + ':' + min + ':' + sec);
  //var stringclock = clock.innerHTML.toString();

}





setInterval(logTime, 1000);


//clock.addEventListener('load', logTime);
