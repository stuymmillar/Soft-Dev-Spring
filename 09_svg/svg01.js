//Max Millar
//SoftDev2 pd06
//K#09 -- Connect the Dots
//2019-03-13

var v = document.getElementById("vimage");
var cleare = document.getElementById("but_clear");
var lasty = -1;
var lastx = -1;

var draw = function(e) {
  console.log(e);
  e.preventDefault();
  var x = e.offsetX;
  var y = e.offsetY;

  if (lasty != -1 & lastx != -1){
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", lastx);
    l.setAttribute("y1", lasty);
    l.setAttribute("x2", x);
    l.setAttribute("y2", y);
    l.setAttribute("stroke", "black");
    v.appendChild(l);
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", lastx);
    c.setAttribute("cy", lasty);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    v.appendChild(c);
  }
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 10);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  v.appendChild(c);
  lastx = x
  lasty = y
};

var clear = function(e) {
  while (v.lastChild) {
    v.removeChild(v.lastChild);
  }
  lasty = -1;
  lastx = -1;
};


cleare.addEventListener('click', clear);
v.addEventListener('click', draw);
