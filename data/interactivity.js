// TIMER TEXT DESIGN
let isBlue = true;
var display = document.createElement('h1');
self.port.on("time_spent", function(message){
    display.textContent= message;
})

display.setAttribute("id","displayText");
display.style.cssText = 
    " opacity:0.5;" +
    " color:Blue;" +
    " font-family:'Geneva';" +
    " font-size:150px;" +
    " font-weight:500;";

draggableDiv.appendChild(display);

    //ACTIVATED CONTRAST
document.getElementById("displayText").addEventListener("click", function(){
    (isBlue)? whiteText() : blueText();
})
function blueText() {
    isBlue = true;
    display.style.cssText = 
        " opacity:0.5;" +
        " color:Blue;" +
        " font-family:'Geneva';" +
        " font-size:150px;" +
        " font-weight:500;";
}

function whiteText() {
    isBlue = false;
    display.style.cssText = 
        " opacity:0.5;" +
        " color: White;" +
        " font-family:'Geneva';" +
        " font-size:150px;" +
        " font-weight:500;";
}