//Max Millar
//SoftDev2 pd06
//K#03 -- They lock us in the tower whenever we get caught
//2019-02-06

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var requestID;
var radius = 26;// = ???
var growing = 1;// = ???
var max = 100;
var min = 25;
var state = true;

var clear = function () {
  ctx.clearRect(0, 0, c.width, c.height);
};

var drawDot = function (id) {
  // ...
  window.cancelAnimationFrame(requestID)
  if (radius == max || radius == min){
    state = !(state)
  }
  if (state){
    radius += growing;
  }
  else {
    radius -= growing;
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

var dotButton = document.getElementById("circle");
dotButton.addEventListener('click', drawDot);
var stopButton = document.getElementById("stop");
stopButton.addEventListener('click', stopIt);
