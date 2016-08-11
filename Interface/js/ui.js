var draggableDiv = document.createElement('div');
draggableDiv.setAttribute('id','draggableDiv');
draggableDiv.style.cssText= "width:370px; height:150px; cursor:grab; position:relative; text-align:center;";


var display = document.createElement('h1');
display.textContent = "00" + ":" + "00"; 
display.setAttribute("id","displayText");
display.style.cssText = "color:blue; font-family:'Lato'; font-size:150px; font-weight:400; opacity: 0.5;";

draggableDiv.appendChild(display);
document.body.appendChild(draggableDiv);

// Make the timespent div moveable- Would be much easier in jQuery
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
