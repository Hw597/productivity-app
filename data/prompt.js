//PROMPT.JS
draggableDiv.style.cssText +=
	" position: fixed;"
    + " background-color: rgba(245, 245, 245, 0.3);"
    + " cursor: default;"
    + " top: 0;" 
    + " right: 0;"	
    + " bottom: 0;"
    + " left: 0;"
    + " width: 100%;"
    + " height: 100%;";

	var activeSVG = document.createElement('object');
	activeSVG.setAttribute('type', 'image/svg+xml');
    activeSVG.setAttribute('data', 'data/MonoPt.svg');
    activeSVG.setAttribute('id', 'activeSVG');
    activeSVG.style.cssText = 
    " position: fixed;"
    + " width: 65%;"
    + " height: 65%;";
    draggableDiv.appendChild(activeSVG);

    	var backUp = document.createElement('p');
		backUp.textContent= "Img back up";
	    activeSVG.appendChild(backUp);

    var svg = document.getElementById("activeSVG");
	var svgDoc = svg.contentDocument;
	var webNameS = svgDoc.getElementById("webName");
	webNameS.textContent = location.hostname.replace("www.", " ");

	webNameS.getElementByClassName('YES').onclick = function (){
		self.port.emit("productive", true);
	}

	webNameS.getElementByClassName('NO').onclick = function (){
		self.port.emit("productive", false);
	}

/*
var imageContainer = document.createElement('img');
	//imageContainer.setAttribute('src', 'C:\Users\Henry\Documents\Learn to Program\Productivity App\data\Assets\prompt_background.gif');
	imageContainer.setAttribute('src', 'https://s32.postimg.org/vciv5zz3p/prompt_background.gif');
	imageContainer.style.cssText = 
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
		" position : relative;" +
		" width: 100%;" +
		" top 30px;" +
		" color: Black;" +
		" z-index: 1002;";
draggableDiv.appendChild(questionP1);

var websiteContainer = document.createElement('div');
	websiteContainer.setAttribute('id', 'websiteContainer');
 	websiteContainer.style.cssText =
 		" margin : auto;" +
 		" position: relative;" +
 		" height: 114px;" +
 		" width: 100%;" +
 		" z-index: 1002;";
draggableDiv.appendChild(websiteContainer);
    
var website = document.createElement('h1');
	website.setAttribute('id', 'website');
	
  self.port.on("website", function(message){
	    website.textContent = message;
	})
  
  	website.textContent = location.hostname.replace("www.", " ");//pro
	website.style.cssText = 
		" margin : auto;" +
		" position: relative;" +
		" display: inline-block;" +
		" width: 100%;" +
		" height: auto;" +
		" vertical-align: middle;" +
		" color: Black;" +
		" font-family: 'Open Sans';" +
		" font-size: 9.5vw;" +
		" font-weight: 300;" +
		" z-index: 1002;";
websiteContainer.appendChild(website);

var questionP2 = document.createElement('h2');
	questionP2.setAttribute('id', 'questionP2');
	questionP2.textContent = "productive";
	questionP2.style.cssText =
		" margin : 20px auto 0;" +
		" position: relative;" + 
		" width: 100%;" +
		" top 15px;" +
		" color: Black;" +
		" z-index: 2;";
draggableDiv.appendChild(questionP2);

var semiCircleTop = document.createElement('div');
	semiCircleTop.setAttribute('id', 'yes');
	semiCircleTop.style.cssText =
     	" margin : 135px auto 0;" +
     	" height:50px;" +
     	" width:100px;" +
     	//" padding-top: 10px;" +
     	//" padding-bottom: 0px;" +
     	" line-height: 50px;" +
     	" border-radius: 100px 100px 0px 0px;" +
     	" -webkit-border-radius: 100px 100px 0 0;" +
     	" border-style: solid;" +
     	" border-width: 20px 20px 0px 20px;" +
    	" border-color: grey;" +
    	" background-color: black;" +
    	" z-index: 1002;" +
    	" cursor: pointer;";    
draggableDiv.appendChild(semiCircleTop);
	var sCTText = document.createElement('h2');
		sCTText.textContent = "YES";
		sCTText.style.cssText =
			" font-weight:450;" +
			" width: 100%;" +
			" vertical-align: middle;" +
			" height: 100%;" +
	     	" font-size: 30px;" +
	     	" font-family: 'Open Sans';" +
	     	" color: white;";
	 	semiCircleTop.appendChild(sCTText);

/*
function hEffect(target, activate){
	if (activate === "activate"){
  	target.style.cssText += "text-shadow: 4px 4px LightGrey;";
  }
  else if(activate === "deactivate") {
  	target.style.cssText.replace("text-shadow: 4px 4px LightGrey;", "");
  }
}

document.getElementById('yes').onmouseover = function(){
	hEffect(semiCircleTop, "activate");
  document.getElementById('yes').onmouseout = function(){
  	hEffect(semiCircleTop, "deactivate");
  }
}

document.getElementById('yes').onclick = function (){
	self.port.emit("productive", true);
}

var semiCircleBottom = document.createElement('div');
	semiCircleBottom.setAttribute('id', 'no');
	semiCircleBottom.style.cssText =
  	 	" margin : 0px auto;" +
    	" height:50px;" +
    	" width:100px;" +
    	//" padding-top: 10px;" +
    	//" padding-bottom: 0px;" +
    	" font-weight:450;" +
    	" font-size: 30px;" +
    	" font-family: 'Geneva';" +
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
document.getElementById('no').onclick = function (){
	self.port.emit("productive", false);
}
	var sCBText = document.createElement('h2');
		sCBText.textContent = "NO";
		sCBText.style.cssText =
			" font-weight:450;" +
	     	" font-size: 30px;" +
	     	" width: 100%;" +
	     	" height: 100%;" +
	     	" font-family: 'Open Sans';" +
	     	" color: white;";
	 	semiCircleBottom.appendChild(sCBText);
*/