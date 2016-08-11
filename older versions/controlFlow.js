// Dependencies
var tabs = require("sdk/tabs")
var ss = require("sdk/simple-storage");

if (!ss.storage.browsingHistory){
	ss.storage.browsingHistory = [];
}

function clock (elem) {
  var time = 0;
  var interval;
  var offset;

  function update() {
    if (this.isOn) {
      var timePassed = delta();
      time += timePassed;
    }

    var formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds);
    var hours = time.getHours()
    var minutes = time.getMinutes()
    var seconds = time.getSeconds()

    return hours + ' : ' + minutes;
  }

  this.isOn = false;

  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 1000);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function() {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = function() {
    time = 0;
    update();
  };
  
  tabs.on("activate", function(tab)) {
  	this.start();
  }
  
  tabs.on("deactivate", function(tab)) {
  	this.stop();
  }
}

function searchArray(property, value) {
	for (i = 0; i < ss.storage.browsingHistory.length; i++) {
		return value === ss.storage.browsingHistory[i][property];
	}
}

tabs.on('ready', function(tab){	 //ignores back forward need to intergrate pageshow
	
	searchArray("website", getWebsiteName())? updateEntry() : newEntry();

	function naming(){
		var n = getWebsiteName();
		return n.replace(/\.|-/g,"_");
	}

	function getWebsiteName(){
		var n = tab.url;
		var n1 = n.replace(/^.*\/\//,"");
		var website = n1.replace(/\/.*$/,"");
		return website
	}

	function entryConstructor(){
		// timer stuff		
		this.timer = new clock,	

		this.url = tab.url,	// I get the feeling this might be buggy
		this.webstie = getWebsiteName(),
		// this.designation = BoP() ,
		this.lastVisited = new Date,
		// this.timeSpent_d = timeSpent_d,
		// this.timeSpent_w = timeSpent_w,
		// this.timeSpent_m = timeSpent_m,
	}

	function newEntry(){
		function f () {
			ss.storage[naming()] = new entryConstructor;	//I know, not best practice, will go back later and find a better solution
			return ss.storage[naming()]
		}
		browsingHistory.push(f());
	}

	function updateEntry(){

	}
	
}
