var draggableDiv = document.createElement('div');
draggableDiv.setAttribute('id','draggableDiv');
draggableDiv.style.cssText= "width:400px; height:150px; cursor:grab; position:absolute; text-align:center; z-index:1000; top: 150px;";
let isBlue = true;

var display = document.createElement('h1');
self.port.on("time_spent", function(message){
    display.textContent= message;
})
display.setAttribute("id","displayText");
display.style.cssText = "opacity:0.5; color:Blue; font-family:'Geneva'; font-size:150px; font-weight:500;";


draggableDiv.appendChild(display);
document.body.appendChild(draggableDiv);

//adding contrast
document.getElementById("displayText").addEventListener("click", function(){
    (isBlue)? whiteText() : blueText();
})
function blueText() {
    isBlue = true;
    display.style.cssText = "opacity:0.5; color:Blue; font-family:'Geneva'; font-size:150px; font-weight:500;";
}

function whiteText() {
    isBlue = false;
    display.style.cssText = "opacity:0.5; color:White; font-family:'Geneva'; font-size:150px; font-weight:500;";
}

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
