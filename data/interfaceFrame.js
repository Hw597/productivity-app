// INTERFACE FRAME
var font = document.createElement('link');
	font.setAttribute('rel', 'stylesheet');
	font.setAttribute('type', 'text/css');
	font.setAttribute('href', 'https://fonts.googleapis.com/css?family=Open+Sans');
document.head.appendChild(font);
  
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