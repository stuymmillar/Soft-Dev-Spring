//Max Millar
//SoftDev2 pd06
//K#11 -- Ask Circles [Change || Die] ...While On The Go
//2019-03-18

var v = document.getElementById("vimage");
var cleare = document.getElementById("but_clear");
var mover = document.getElementById("but_move");
var question = document.getElementById("but_?");
var requestID;
var node;
var rainbow = false;

var draw = function(e) {
  console.log(e);
  e.preventDefault();
  var x = e.offsetX;
  var y = e.offsetY;

  var in_circle = false;
  var circle_node = null;
  v.childNodes.forEach(function(jnode){
	   //console.log(node);
     try{
       if ((Math.sqrt(Math.pow((jnode.cx.baseVal.value - x),2) + Math.pow((jnode.cy.baseVal.value - y),2))) <= 25){
         in_circle = true;
        circle_node = jnode;
       }
     }
     catch(err){
       //console.log('first');
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
      c.setAttribute('xdir', 0);
      c.setAttribute('ydir', 0);
      c.setAttribute("fill", "purple");
      v.appendChild(c);
  }
};

var clear = function(e) {
  while (v.lastChild) {
    v.removeChild(v.lastChild);
  }
  window.cancelAnimationFrame(requestID)
  rainbow = false;
};

var move = function(e) {
  window.cancelAnimationFrame(requestID)
  v.childNodes.forEach(function(node){
    try{
        if (rainbow){
          node.setAttribute('fill', getRandomColor());
        }
      	if ((node.cx.baseVal.value - 25) <= 0) {
      	    node.setAttribute('xdir', (node.getAttribute('xdir') + 1));
      	}
        else if ((node.cx.baseVal.value + 25) >= 500){
          node.setAttribute('xdir', (node.getAttribute('xdir') - 1));
        }
      	if ((node.cy.baseVal.value - 25) <= 0 ) {
      	    node.setAttribute('ydir', (node.getAttribute('ydir') + 1));
      	}
        else if ((node.cy.baseVal.value + 25) >= 500){
          node.setAttribute('ydir', (node.getAttribute('ydir') - 1));
        }
      	if (node.getAttribute('ydir') == 1){
      	    if (node.getAttribute('xdir') == 1){
      		node.setAttribute('cx', (node.cx.baseVal.value + 1));
      		node.setAttribute('cy', (node.cy.baseVal.value + 1));
      	    }
      	    else {
      		node.setAttribute('cx', (node.cx.baseVal.value - 1));
      		node.setAttribute('cy', (node.cy.baseVal.value + 1));
      	    }
      	}
    	else {
    	    if (node.getAttribute('xdir') == 1){
    		node.setAttribute('cx', (node.cx.baseVal.value + 1));
    		node.setAttribute('cy', (node.cy.baseVal.value - 1));
    	    }
    	    else {
    		node.setAttribute('cx', (node.cx.baseVal.value - 1));
    		node.setAttribute('cy', (node.cy.baseVal.value - 1));
    	    }
    	}
    }
  catch(err){
    //console.log('first');
    }

  });
  requestID = window.requestAnimationFrame(move);
};

var getRandomColor = function (e) {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

cleare.addEventListener('click', clear);
mover.addEventListener('click', move);
question.addEventListener('click', function(e){
  rainbow = !(rainbow);
});
v.addEventListener('click', draw);
