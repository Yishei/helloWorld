function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  var newColor = getRandomColor();
  document.getElementById("greeting").style.color = newColor;
}

function redirectToProtected() {
  window.location.href = "/protected/index.html";
}
