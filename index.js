// Dependencies
var tabs = require("sdk/tabs");
var ss = require("sdk/simple-storage");
var { setInterval, clearInterval } = require("sdk/timers");
var self = require("sdk/self");
 
// Load or Create persistent array that will act as a history
if (!ss.storage.browsingHistory){
	 ss.storage.browsingHistory = [];
}

// function to search specific array for property and value of choice
function searchArray(property, value) {
	for (i = 0; i < ss.storage.browsingHistory.length; i++) {
    
    if (value === ss.storage.browsingHistory[i][property]){ 
      console.log("MATCH FOUND " + ss.storage.browsingHistory[i][property]);
      return true;
      break;
    } 

    else if (i === ss.storage.browsingHistory.length -1){
      console.log("NO MATCH FOUND");
      return false;
    }
	}
}

//event listener new page? - search array, create or updateEntry
tabs.on('ready', function(tab){	 //ignores back forward need to intergrate pageshow

  searchArray("website", getWebsiteName())? updateEntry() : newEntry();

  function naming(){
		var n = getWebsiteName();
		return n.replace(/\.|-/g,"_");
	}

	function getWebsiteName(){
		let n = tab.url;
    let n1 = n.toString();
		let n2 = n1.replace(/^.*\/\//,"");
		let site = n2.replace(/\/.*$/,"");
		return site.toString()
	}

	function entryConstructor(){
    this.timeSpentD = 0;
    this.timer = new clock;   
    this.url = tab.url;
    this.website = getWebsiteName();
    // this.designation = BoP() ,
    this.lastVisited = new Date;
    // this.timeSpent_w = timeSpent_w,
    // this.timeSpent_m = timeSpent_m,
  }

  // timer stuff	
  function clock (){

    var time = 0; //overall time variable secured behind closure

    var interval; //how often the update will be called (every second)
    var offset; //obvious
    var formattedTime; //the time in a readable format
    var worker; //global object wlll handle communicating to UI (prob not best practice will go back and seperate concerns later)

    function update() {
      if (this.isOn) {
        var timePassed = delta();
        time += timePassed; 
      }
      formattedTime = timeFormatter(time);
      worker.port.emit("time_spent", formattedTime);
    }

    function timeStore () {
      ss.storage[naming()]["timeSpentD"] = time;
    }

    function delta() {
      var now = Date.now();
      var timePassed = now - offset;
      offset = now;
      return timePassed;
    }

    function timeFormatter(timeInMilliseconds) {
      var time = new Date(timeInMilliseconds);
      var hours = time.getHours().toString();
      var minutes = time.getMinutes().toString();
      var seconds = time.getSeconds().toString();

      if (hours.length < 2) {
        hours = "0" + hours;
      }
    
      if (minutes.length < 2) {
        minutes = "0" + minutes;
      }

      if (seconds.length < 2) {
        seconds = "0" + seconds;
      }
      return minutes + ':' + seconds; // hours + ':' + minutes; (release stage)
    }

    this.isOn = false;
    this.uiAttached = false; 

    this.start = function() {
      if (!this.isOn) {
        // UI Insertion
        // probably should seperate concerns later
        if (!this.uiAttached) {
          worker = tab.attach({
            contentScriptFile: self.data.url("interactivity.js")
          })
          this.uiAttached = true
        ;}
        
        console.log("count has started");
        interval = setInterval(update.bind(this), 1000); 
        offset = Date.now();
        this.isOn = true;
      }
    }

    this.stop = function() {
      if (this.isOn) {
        timeStore();
        clearInterval(interval);
        interval = null;
        this.isOn = false;
        console.log("count has stopped");

        //UI clear
        worker.port.emit("time_spent", ""); 
      }
    }

    function reset() {
      time = 0;
      update();
    }
// event watching, Follows on from tab ready
//initializing timer. When clock is created check if activeTab? otherwise listen for activate event
    
    tabs.activeTab.url === tab.url? this.start() : this.stop(); // need a way t turn this off on leaving page
      
    tabs.activeTab.on("activate", function(tab) {
     ss.storage[naming()]["timer"].start();
    })

    tabs.activeTab.on("deactivate", function(tab) {
      ss.storage[naming()]["timer"].stop();
    })

    tabs.activeTab.on("close", function(tab) {
      ss.storage[naming()]["timer"].stop();
    })
  }

	function newEntry(){
		function f () {
			ss.storage[naming()] = new entryConstructor;
      return ss.storage[naming()];
		}
		ss.storage.browsingHistory.push(f());
    console.log(ss.storage.browsingHistory);
	}

	function updateEntry(){
    ss.storage[naming()]["lastVisited"] = new Date;
    ss.storage[naming()]["timer"].start();
  }
})  