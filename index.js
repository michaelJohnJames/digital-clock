var box3 = document.getElementById('box3');
var box2 = document.getElementById('box2');
var clock = document.getElementById('clock');
var hideBox = function(box3) { box3.classList.add("hidden") };
var showBox = function(box3) { box3.classList.remove("hidden") };



function logTime() {

  var time = new Date();
  var hrs = time.getHours() > 9 ? time.getHours() : '0' + time.getMinutes();
  var min = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
  var sec = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();

  clock.innerHTML = (hrs + ':' + min + ':' + sec);

  var stringClock = ('#' + hrs.toString() + min.toString() + sec.toString());

  document.body.style.backgroundColor = stringClock;

}



function redBox() {
  var time = new Date();
  var seconds = time.getSeconds();

 if ( seconds > 10 ) {
  document.getElementById("box3").classList.add('hidden');
}  else {   document.getElementById("box3").classList.remove('hidden'); }
}


function redFlash() {
  var time = new Date();
  var seconds = time.getSeconds();

  if ( seconds > "49" ) {
  document.getElementById("clock").style.color = "red";
  } else { document.getElementById("clock").style.color = "black";
}

  if ( seconds > "56" ) {
    document.getElementById("word1").style.color = "red";
  } else { document.getElementById("word1").style.color = "white"; }

  if ( seconds > "57" ) {
    document.getElementById("word2").style.color = "red";
  } else { document.getElementById("word2").style.color = "white"; }

  if ( seconds > "58" ) {
    document.getElementById("word3").style.color = "red";
  } else { document.getElementById("word3").style.color = "white"; }

}




setInterval(redFlash, 1000);
setInterval(logTime, 1000);
setInterval(redBox, 1000);
