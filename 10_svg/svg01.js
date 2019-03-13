//Max Millar
//SoftDev2 pd06
//K#09 -- Connect the Dots
//2019-03-13

var v = document.getElementById("vimage");
var cleare = document.getElementById("but_clear");

var draw = function(e) {
  console.log(e);
  e.preventDefault();
  var x = e.offsetX;
  var y = e.offsetY;

  var in_circle = false;
  var circle_node = null;
    
    v.childNodes.forEach(function(node){
	console.log(node);
	console.log((Math.sqrt(Math.pow((node.cx - x),2) + Math.pow((node.cy - y),2))));
	if ((Math.sqrt(Math.pow((node.cx - x),2) + Math.pow((node.cy - y),2))) <= 25){
	    
	    console.log("yes")
	  in_circle = true;
	  circle_node = node
      }
  });
    
  if (in_circle){
      node.setAttribute("fill", "yellow");
  }
  else {
      var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", x);
      c.setAttribute("cy", y);
      c.setAttribute("r", 25);
      c.setAttribute("fill", "purple");
      v.appendChild(c);
  }
};

var clear = function(e) {
  while (v.lastChild) {
    v.removeChild(v.lastChild);
  }
};


cleare.addEventListener('click', clear);
v.addEventListener('click', draw);
