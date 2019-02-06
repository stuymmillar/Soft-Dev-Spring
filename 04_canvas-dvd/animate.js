//Pegleg Pete's Posse -- Max Millar, Tim Marder, Maggie Zhao
//SoftDev2 pd06
//K#04 -- What is it saving the screen from?
//2019-02-07

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var requestID;
var radius = 2;// = ???
var growing = true;// = ???
var ydir = true;
var xdir = true;
var x = 300;
var y = 300;

var clear = function () {
  ctx.clearRect(0, 0, c.width, c.height);
};

var drawDot = function (id) {
  // ...
  window.cancelAnimationFrame(requestID)
  x = 300
  y = 300
  if (radius == 1 || radius == (c.width / 2)){
    growing = !(growing)
  }
  if (growing){
    radius += 1;
  }
  else {
    radius -= 1;
  }
  // draw the dot
  clear();
  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  requestID = window.requestAnimationFrame(drawDot);
  // ...
};

var stopIt = function () {
  window.cancelAnimationFrame(requestID);
};

var dvd = function (id) {
  window.cancelAnimationFrame(requestID)
  if ((x) == 0 || (x + 100) == c.width) {
    xdir = !(xdir);
  }
  if ((y) == 0 || (y + 50) == c.height){
    ydir = !(ydir);
  }
  if (ydir){
    if (xdir){
      x += 1;
      y += 1;
    }
    else {
      x -= 1;
      y += 1;
    }
  }
  else {
    if (xdir){
      x += 1;
      y -= 1;
    }
    else {
      x -= 1;
      y -= 1;
    }
  }
  clear();
  var logo = new Image()
  logo.src = "logo_dvd.jpg"
  ctx.drawImage(logo, x, y, width = 100, height = 50);
  requestID = window.requestAnimationFrame(dvd);

}

var dotButton = document.getElementById("circle");
dotButton.addEventListener('click', drawDot);
var stopButton = document.getElementById("stop");
stopButton.addEventListener('click', stopIt);
var dvdButton = document.getElementById("dvd");
dvdButton.addEventListener('click', dvd);
