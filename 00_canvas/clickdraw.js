//Max Millar
//SoftDev2 pd06
//K#00 -- I See a Red Door...
//2019-01-30

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var cleare = document.getElementById("clear");
var changee = document.getElementById("switch");
var state = 1;
var hasDrawing = 0;

var draw = function(e) {
  e.preventDefault();
  var x = e.offsetX;
  var y = e.offsetY;
  if (state == 0) {
    ctx.fillRect(x,y,20,20);
  }
  else {
    ctx.beginPath();
    ctx.ellipse(x,y,10,10,0,0, 2 * Math.PI);
    ctx.fill();
  }
  hasDrawing = 1;
};

var clear = function(e) {
  ctx.clearRect(0, 0, c.width, c.height);
};

var change = function(e) {
  state = (state + 1) % 2
};

cleare.addEventListener('click', clear);
changee.addEventListener('click', change);
c.addEventListener('click', draw);
