function hi() {
  let input = document.getElementById("input").value;
  document.getElementById("user").innerHTML = input;
  document.getElementById("carl").innerHTML = "Hi Baby💓";
}

function fill() {
  let input = document.getElementById("input").value;
  document.getElementById("user").innerHTML = input;
  document.getElementById("carl").innerHTML = "Im Good 😄";
}

function name() {
  let input = document.getElementById("input").value;
  document.getElementById("user").innerHTML = input;
  document.getElementById("carl").innerHTML = "My name is Carl💛";
}

function offline() {
  document.getElementById("seen").style.color = "#ff7675";
  document.getElementById("seen").innerHTML = "Offline";

  let input = document.getElementById("input").value;
  document.getElementById("user").innerHTML = input;
  document.getElementById("carl").innerHTML = "Im sad😞";
}

function showicon() {
  document.getElementById("audio-data").style.display = "block";
  document.getElementById("audio-data").style.marginTop = "15px";
}

function defaultValue() {
  let input = document.getElementById("input").value;
  document.getElementById("user").innerHTML = input;
  document.getElementById("carl").innerHTML = "No Idea...";
}
function PlayMusic() {
  //   var music1 = new Audio("music/music1.mp3");
  document.getElementById("music1").play();
  document.getElementById("music1").volume = "0.2";
  //   music1.play();
  //   music1.volume = 0.2;
}

function PauseMusic() {
  //   var music1 = new Audio("music/music1.mp3");
  //   music1.pause();
  document.getElementById("music1").pause();
}
