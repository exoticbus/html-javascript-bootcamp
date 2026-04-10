let button = document.getElementById("greetBtn");
let nameBox = document.getElementById("username");
let output = document.getElementById("outputText");

function showGreeting() {
  let name = nameBox.value;

  if (name == "") {
    output.innerHTML = "Please enter your name";
  } else {
    output.innerHTML = "Hi, " + name + "!";
  }
}

button.addEventListener("click", showGreeting);
