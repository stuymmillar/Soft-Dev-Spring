//preventFailure - Max Millar and Tim Marder
//SoftDev2 pd06
//K#01 -- ...and I want to Paint It Better
//2019-02-01

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var cleare = document.getElementById("clear");
var changee = document.getElementById("switch");
var state = 1;

var draw = function(e) {
  e.preventDefault(); //prevents the default action of the user clicking on the canvas html tag
  var x = e.offsetX; //the x coordinate location of the mouse click on the canvas starting from the top left
  var y = e.offsetY; //the y coordinate location of the mouse click on the canvas starting from the top left
  if (state == 0) {
    ctx.fillRect(x,y,20,20);
  }
  else {
    ctx.beginPath(); //creates a path for which the ellipse will be added to
    ctx.ellipse(x,y,10,10,0,0, 2 * Math.PI);
    ctx.fill();
  }
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
