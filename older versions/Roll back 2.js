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

  //checks if tab has an attached ui instance. If not it attaches one with "ui" function.
  if (tab.uiAttached === undefined) {
    console.log("tab.uiAttached is about to be reset")
    tab.uiAttached = false;
    ui();
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

// USER INTERFACE OVER

  function entryConstructor(){
    //MAIN  Properties
    this.timeSpentD = 0;
    this.url = tab.url;   
    this.website = getWebsiteName(tab);
    // this.designation = BoP() ,
    this.lastVisited = new Date;
    // this.timeSpent_w = timeSpent_w,
    // this.timeSpent_m = timeSpent_m,
    function timer(e){    
      var formattedTime; //the time in a readable format
      if (e === "start"){
        //if (this.website === getWebsiteName(tabs.activeTab)){
          update.call(this);
       // }
      }
      
      function update() {
          var timePassed = delta();
          time += timePassed; 
          this.timeSpentD = timeFormatter(time);
          console.log(timeFormatter(time));
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

      function reset() {
        time = 0;
        update();
      }           
    };//TIMER ENDING
    
    //function that pushes the time into the UI(Behind closure)
    function uiUpdater() {
      if (this.website === getWebsiteName(tabs.activeTab)) {
        console.log(this.website);
        tab.worker.port.emit("time_spent", this.timeSpentD);    
      } else {
        //ss.storage[naming(tab)]["timer"].stop();
        this.stop;
      }
    }

    // CONTROL FUNCTIONS
    var interval; //how often timer function will be called (every second)
    var offset;
    var time = 0; 

    //Start function set on interval which simultaneously calls timer and pushes to the UI
    this.start = function() {
      offset = Date.now();
      f= function(){
        uiUpdater.call(this);
        timer("start");
      }
      interval = setInterval(f.bind(this), 1000)
      console.log("count has started");
    }
    
    this.stop = function() {
      clearInterval(interval);
      interval = null;
      console.log("count has stopped");
      //UI clear
      tab.worker.port.emit("time_spent", "");
    } //CONTROL FUNCTIONS ENDING

  }// CONSTRUCTOR ENDING
  

  // APPLICATION LOGIC - Follows on from "tabs ready event"
  tab.url === tabs.activeTab.url? ss.storage[naming(tab)].start() : ss.storage[naming(tab)].stop(); 
  tabs.activeTab.on("activate", function(tab) {
    ss.storage[naming(tab)].start();
    console.log("tabs.activeTab activate event fired");

  })

  tabs.activeTab.on("deactivate", function(tab) {
    ss.storage[naming(tab)].stop();
    console.log("tabs.activeTab deactivate event fired");
  })

  tabs.activeTab.on("close", function(tab) {
    ss.storage[naming(tab)].stop();
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