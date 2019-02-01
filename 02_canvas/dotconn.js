//Max Millar
//SoftDev2 pd06
//K#00 -- I See a Red Door...
//2019-01-30

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cleare = document.getElementById("clear");
var lasty = -1;
var lastx = -1;

var draw = function(e) {
  e.preventDefault();
  var x = e.offsetX;
  var y = e.offsetY;

  if (lasty != -1 & lastx != -1){
    ctx.beginPath();
    ctx.fillStyle = "#000000"
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.fill();
  }
  lastx = x
  lasty = y
  ctx.beginPath();
  ctx.fillStyle = "#FF0000"
  ctx.ellipse(x,y,10,10,0,0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#FF0000"
  ctx.ellipse(lastx,lasty,10,10,0,0, 2 * Math.PI);
  ctx.fill();
};

var clear = function(e) {
  ctx.clearRect(0, 0, c.width, c.height);
  lasty = -1;
  lastx = -1;
};


cleare.addEventListener('click', clear);
c.addEventListener('click', draw);
