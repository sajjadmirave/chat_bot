function send() {
  let carl = document.getElementById("carl").value;
  let user = document.getElementById("user").value;
  let input = document.getElementById("input").value;

  // if the send clicked , the carl is online
  document.getElementById("seen").style.color = "#7bed9f";
  document.getElementById("seen").innerHTML = "Online";

  switch (input) {
    case "hi":
    case "Hi":
    case "hello":
    case "Hello":
      hi();
      break;
    case "how are you":
      fill();
      break;
    case "what is your name":
    case "whats your name":
      name();
      break;
    case "//offline":
      offline();
      break;

    case "music":
      play();
      break;


    default:

      defaultValue();
      break;
  }
}
