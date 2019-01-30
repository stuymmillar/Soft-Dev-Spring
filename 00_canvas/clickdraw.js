var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var clear = document.getElementById("clear");
var change = document.getElementById("switch");
var state = 1;

var draw = function(e) {
  var x = e.layerX;
  var y = e.layerY;
  if (state == 0) {
    ctx.fillRect(x,y,5,5);
  }
  else {
    ctx.ellipse(x,y,10,10);
  }
};

var clear = function(e) {
  ctx.clearRect(0, 0, c.width, c.height);
};

var change = function(e) {
  state = (state + 1) % 2
};

c.addEventListener('click', draw);
clear.addEventListener('click', clear);
change.addEventListener('click', change);
