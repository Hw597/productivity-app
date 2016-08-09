var draggableDiv = document.createElement('div');
draggableDiv.setAttribute('id','draggableDiv');
draggableDiv.style.cssText = 
		" display: inline-block;" +
    " cursor:grab;" +
    " position:fixed;" +
    " text-align:center;" +
    " z-index:1000;" +
    " top: 150px;";
document.body.appendChild(draggableDiv);
draggableDiv.style.cssText +=
  " color : black;" +
	" font-family: 'Geneva';";

var imageContainer = document.createElement('img');
	imageContainer.setAttribute('src', 'https://s32.postimg.org/vciv5zz3p/prompt_background.gif');
	imageContainer.style.cssText = 
/*  
  	" background-image: url('https://s32.postimg.org/vciv5zz3p/prompt_background.gif');" +
  	" background-repeat: no-repeat;" +
  	" background-position: center;" +
*/
    " position: absolute;" +
    " margin: 0 auto;" +
    " top: 0;" +
    " right: 0;" +
    " left: 0;" +
    " opacity: 0.5;" +
    " z-index: -1;"; 
draggableDiv.appendChild(imageContainer);

var questionP1 = document.createElement('h2');
	questionP1.setAttribute('id', 'questionP1');
	questionP1.textContent = "Is time spent at";
	questionP1.style.cssText =
		" margin : 120px auto 0;" +
    " top 30px;" +
    " z-index: 1002;";
draggableDiv.appendChild(questionP1);

var website = document.createElement('h1');
	website.setAttribute('id', 'website');
	/*
  self.port.on("website", function(message){
	    website.textContent = message;
	})
  */
  website.textContent = location.hostname; //pro
	website.style.cssText = 
	    " margin : auto;" +
	    " font-family:'Geneva';" +
	    " font-size:80px;" +
	    " font-weight:300;" +
      " z-index: 1002;";
draggableDiv.appendChild(website);

var questionP2 = document.createElement('h2');
	questionP2.setAttribute('id', 'questionP2');
	questionP2.textContent = "productive";
	questionP2.style.cssText =
		" margin : 20px auto 0;" +
    " top 15px;" +
    " z-index: 2;";
draggableDiv.appendChild(questionP2);

var semiCircleTop = document.createElement('div');
	semiCircleTop.setAttribute('id', 'yes');
  semiCircleTop.textContent = "YES";
  semiCircleTop.style.cssText =
     " margin :150px auto 0;" +
     " height:50px;" +
     " width:100px;" +
     " font-weight:450;" +
     " font-size: 30px;" +
     " border-radius: 100px 100px 0px 0px;" +
     " -webkit-border-radius: 100px 100px 0 0;" +
     " color: white;" +
     " border-style: solid;" +
     " border-width: 20px 20px 0px 20px;" +
     " border-color: grey;" +
     " background-color: black;" +
     " z-index: 1002;" +
     " cursor: pointer;";    
draggableDiv.appendChild(semiCircleTop);
function hEffect(target, activate){
	(if activate === "activate"){
  	target.style.cssText += "text-shadow: 4px 4px LightGrey;";
  }
  else if(activate === "deactivate") {
  	target.style.cssText -= "text-shadow: 4px 4px LightGrey;";
  }
}
document.getElementById('yes').onmouseover = hEffect(semiCircleTop, "activate");
document.getElementById('yes').onmouseout = hEffect(semiCircleTop, "deactivate");
//document.getElementById('yes').onclick = self.port.emit("productive", true);

var semiCircleBottom = document.createElement('div');
	semiCircleBottom.setAttribute('id', 'no');
  semiCircleBottom.textContent = "NO";
  semiCircleBottom.style.cssText =
  	 " margin : auto;" +
     " height:50px;" +
     " width:100px;" +
     " font-weight:450;" +
     " font-size: 30px;" +
     " border-radius: 0px 0px 100px 100px;" +
     " -webkit-border-radius: 0px 0px 100px 100px;" +
     " color: white;" +
     " border-style: solid;" +
     " border-width: 0px 20px 20px 20px;" +
     " border-color: black;" +
     " background-color: grey;" +
     " z-index: 1002;" +
     " cursor: pointer;";
draggableDiv.appendChild(semiCircleBottom);

//DRAGABBLE
// DRAGGABILITY
    // Credit to Taufik Nurrohman- Fiddle Author- Code is based off of his 

var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}

// Bind the functions...
document.getElementById('draggableDiv').onmousedown = function () {
    _drag_init(this);
    return false;
};
 
document.onmousemove = _move_elem;
document.onmouseup = _destroy;