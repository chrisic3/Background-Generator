var body = document.querySelector("body"),
    color1 = document.querySelector("#color1"),
    color2 = document.querySelector("#color2"),
    h3 = document.querySelector("h3"),
    button = document.querySelector("button"),
    r = 0,
    g = 0,
    b = 0;

// Setting up the body background to display initial gradient
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
h3.textContent = body.style.background + ";";

// All event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", getRandom);

// ********************
// Functions
// ********************
// Set's the gradient when the user changes the input
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = body.style.background + ";";
}

// Returns a random number between 0 and 255
function randomNum() {
  return Math.floor(Math.random() * 256);
}

// Returns an rgb string based on three randomNum's
function randomColor() {
  r = randomNum();
  g = randomNum();
  b = randomNum();

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Takes a number and converts it to it's hex equivalent
function numToHex(n) {
  var hex = n.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

// Takes all three rgb values and converts them to a hex value
function toHex(r, g, b) {
   return "#" + numToHex(r) + numToHex(g) + numToHex(b);
}

// Set's the background to the random gradient when button is clicked
function getRandom() {
  var c1 = randomColor();
  var h1 = toHex(r, g, b);
  var c2 = randomColor();
  var h2 = toHex(r, g, b);

  body.style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ")";
  h3.textContent = body.style.background + ";";
  color1.value = h1;
  color2.value = h2;
}


