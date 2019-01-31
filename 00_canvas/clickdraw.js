//Max Millar
//SoftDev2 pd06
//K#00 -- I See a Red Door...
//2019-01-30

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var cleare = document.getElementById("clear");
var changee = document.getElementById("switch");
var state = 1;

var draw = function(e) {
  var x = e.layerX;
  var y = e.layerY;
  if (state == 0) {
    ctx.fillRect(x,y,5,5);
  }
  else {
    ctx.beginPath();
    ctx.ellipse(x,y,2.5,2.5,0,0, 2 * Math.PI);
    ctx.fill();
  }
};

var clear = function(e) {
  ctx.clearRect(0, 0, c.width, c.height);
};

var change = function(e) {
  console.log(state)
  state = (state + 1) % 2
};

cleare.addEventListener('click', clear);
changee.addEventListener('click', change);
c.addEventListener('click', draw);
