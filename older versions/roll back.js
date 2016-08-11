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
      console.log("MATCH FOUND" + ss.storage.browsingHistory[i][property]);
      return true;
      break;
    } 

    else if (i === ss.storage.browsingHistory.length -1){
      console.log("NO MATCH FOUND");
      return false;
    }
	}
}
// entry funtions
// definitely a messy solution

tabs.on('ready', function(tab){ //ignores back forward need to intergrate pageshow
  
  //tab centric object wlll handle communicating to UI (prob not best practice will go back and seperate concerns later)
  if (!tab.worker) {
    console.log("worker is about to be reset");
    tab.worker;
  }; 

  if (tab.uiAttached === undefined) {
    console.log("tab.uiAttached is about to be reset")
    tab.uiAttached = false;
  };
  searchArray("website", getWebsiteName(tab))? updateEntry() : newEntry();
 

  function naming(element){
    var n = getWebsiteName(element);
    return n.replace(/\.|-/g,"_");
  }

  function getWebsiteName(element){
    let n = element.url;
    let n1 = n.toString();
    let n2 = n1.replace(/^.*\/\//,"");
    let site = n2.replace(/\/.*$/,"");
    return site.toString()
  }

// USER INTERFACE

/*function that attaches a seperatejs script to the tab.
script creates a transparent, draggable div in which the time will be pushed */
  function ui() {
    //if (tab.uiAttached === false) {
      console.log("attaching a new UI instancce")
      tab.worker = tab.attach({
        contentScriptFile: self.data.url("interactivity.js")
      });
      tab.uiAttached = true;
    //}
  }

 //function that pushes the time into the transparent div created above
  function uiUpdater() {
    if (ss.storage[naming(tab)]["website"] === getWebsiteName(tabs.activeTab)) {
      tab.worker.port.emit("time_spent", ss.storage[naming(tabs.activeTab)]["timeSpentD"]);    
    } else {
      ss.storage[naming(tab)]["timer"].stop();
    }
  }
// USER INTERFACE OVER


  function entryConstructor(){
    this.timeSpentD = 0;
    this.url = tab.url;
    this.timer = new clock;   
    this.website = getWebsiteName(tab);
    // this.designation = BoP() ,
    this.lastVisited = new Date;
    // this.timeSpent_w = timeSpent_w,
    // this.timeSpent_m = timeSpent_m,
  }

  // timer stuff  
  function clock (){
    var time = 0;    
    var interval; //how often the update will be called (every second)
    var offset; //obvious
    var formattedTime; //the time in a readable format
    
    function update() {
        var timePassed = delta();
        time += timePassed; 
        formattedTime = timeFormatter(time); // redundant
        ss.storage[naming(tab)]["timeSpentD"] = formattedTime;     // fix afterwards
        uiUpdater();
    }

    function timeStore() {
      ss.storage[naming(tab)]["timeSpentD"] = time;
      console.log(ss.storage[naming(tab)]["timeSpentD"]);
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


    this.start = function() {
      // UI Insertion
      ui();
      interval = setInterval(update.bind(this), 1000); 
      offset = Date.now();   
      console.log("count has started");
    }

    this.stop = function() {
      timeStore();
      clearInterval(interval);
      interval = null;
      console.log("count has stopped");

      //UI clear
      tab.worker.port.emit("time_spent", ""); 
    }

    function reset() {
      time = 0;
      update();
    }

// event watching, Follows on from tab ready
//initializing timer. When clock is created check if activeTab? otherwise listen for activate event
    
    tab.url === tabs.activeTab.url? this.start() : this.stop(); // need a way t turn this off on leaving page     
    tab.worker.port.on("idle", function(message) {
      if (message === true){
        ss.storage[naming(tab)]["timer"].stop();
        console.log("idle time detcted");
      }
      else if (message === false) {
        ss.storage[naming(tab)]["timer"].start();
        console.log("idle time over");
      } 

    })
  }

  tabs.activeTab.on("activate", function(tab) {
    ss.storage[naming(tab)]["timer"].start;
    console.log("tabs.activeTab activate event fired");
  })

  tabs.activeTab.on("deactivate", function(tab) {
    ss.storage[naming(tab)]["timer"].stop;
    console.log("tabs.activeTab deactivate event fired");
  })

  tabs.activeTab.on("close", function(tab) {
    ss.storage[naming(tab)]["timer"].stop();
    console.log("tabs.activeTab close event fired");
  })

  function newEntry(){
    console.log("newEntry should beb being created");
    function f() {
      ss.storage[naming(tab)] = new entryConstructor;
      return ss.storage[naming(tab)];  
    }
    ss.storage.browsingHistory.push(f());
    console.log(ss.storage.browsingHistory);
  }

  function updateEntry(){
    console.log(ss.storage[naming(tab)]["timer"]);
    ss.storage[naming(tab)]["lastVisited"] = new Date;
    ss.storage[naming(tab)]["timer"].start();
  }
})
//event listener new page? - search array, create or updateEntry
