//Max Millar
//SoftDev2 pd06
//K#11 -- Ask Circles [Change || Die] ...While On The Go
//2019-03-18

var v = document.getElementById("vimage");
var cleare = document.getElementById("but_clear");
var mover = document.getElementById("but_move");
var question = document.getElementById("but_?");

var draw = function(e) {
  console.log(e);
  e.preventDefault();
  var x = e.offsetX;
  var y = e.offsetY;

  var in_circle = false;
  var circle_node = null;
  console.log(v);
  v.childNodes.forEach(function(node){
	   //console.log(node);
     try{
       if ((Math.sqrt(Math.pow((node.cx.baseVal.value - x),2) + Math.pow((node.cy.baseVal.value - y),2))) <= 25){
         in_circle = true;
        circle_node = node;
       }
     }
     catch(err){
       console.log('first');
     }
  });

  if (in_circle){
      if (circle_node.getAttribute('fill') == 'purple'){
        circle_node.setAttribute("fill", "green");
      }
      else {
        var nx = Math.floor(Math.random() * 501);
        var ny = Math.floor(Math.random() * 501);
        circle_node.setAttribute('cx', nx);
        circle_node.setAttribute('cy', ny);
        circle_node.setAttribute("fill", "purple");
      };
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

var move = function(e) {
    v.childNodes.forEach(function(node){
	node.setAttribute('xdir' = true);
	node.setAttribute('ydir' = true);
	window.cancelAnimationFrame(requestID)
	if ((node.cx) == 0 || (node.cx + 25) == 500) {
	    node.setAttribute(!(node.xdir));
	}
	if ((node.cy) == 0 || (node.cy + 25) == 500){
	    node.setAttribute(!(node.xdir));
	}
	if (node.ydir){
	    if (node.xdir){
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
	requestID = window.requestAnimationFrame(move);
    });
};


cleare.addEventListener('click', clear);
mover.addEventListener('click', move);
question.addEventListener('click', question);
v.addEventListener('click', draw);
