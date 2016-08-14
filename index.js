// Dependencies
var tabs = require("sdk/tabs");
var ss = require("sdk/simple-storage");
var { setInterval, clearInterval } = require("sdk/timers");
var self = require("sdk/self");
var pageMod = require("sdk/page-mod");
var isLive = false;
 
// Load or Create persistent array that will act as a history
if (!ss.storage.browsingHistory){
    ss.storage.browsingHistory = [];
}

// GLOBAL FUNCTIONS
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
}// GLOBAL FUNCTONS END.

tabs.on('ready', function(tab){
  console.log("this is working");
// APPLICATION LOGIC
  //tab centric object wlll handle communicating to UI (prob not best practice will go back and seperate concerns later)
  if (!tab.worker) {
    console.log("worker is about to be reset");
    tab.worker;
  }; 

  //checks if tab has an attached ui instance. If not it attaches one with "ui" function.
  if (uiAttached === undefined) {
    console.log("tab.uiAttached is about to be reset"); 
    var uiAttached = false;
  }
  searchArray("website", getWebsiteName(tab))? updateEntry() : newEntry();

  // FUNCIONS FOR APPLICATION LOGIC
  function newEntry(){
    console.log("newEntry should be being created");
    function f() {
      ss.storage[naming(tab)] = new entryConstructor;
      return ss.storage[naming(tab)];  
    }
    ui("pDesignation");
    tab.worker.port.on("productive", function(response){
      ss.storage[naming(tab)]["productive"] = response;
      ui("timer")
    })
    ss.storage.browsingHistory.push(f());
    console.log(ss.storage.browsingHistory);
  }

  function updateEntry(){
    ui("timer");
    ss.storage[naming(tab)]["lastVisited"] = new Date;
  }

// USER INTERFACE (VIEW)  

  /*function that attaches a seperatejs script to the tab.
  script creates a transparent, draggable div in which the time will be pushed */
  function ui(type) {
    if (type === "blank") {
      console.log("attaching a new UI instancce")
      tab.worker = tab.attach({
        contentScriptFile: [
          self.data.url("interfaceFrame.js"),
          self.data.url("draggability.js")
        ]
      });
    } 
    else if (type==="pDesignation") {
      console.log("prompting for website designation");
      
      tab.worker = tab.attach({
        contentScriptFile: [
          self.data.url("MonoPt.js")
        ]
      });
      
      pageMod.PageMod({
        include: "*",
        //contentScriptFile: self.data.url("MonoPt.js"),
        contentStyle: [
          //"@font-face { font-family: 'PT Sans', sans-serif; src: url('https://fonts.googleapis.com/css?family=PT+Sans');}",
          ".qText { font-family: 'PT Sans', sans-serif; font-size: 15pt; }",
          "#webName {font-size: 25pt; }",
          "p, h1, h2, h3 {font-size: 30pt; color: red;}",
          "#rWstroke, #yButton, #nButton, .invisibleW { fill: #FFFFFF; }",
          "#qMarkFill, #qMarkStroke, #rWfill { fill: #666666; }",
          "#yStroke, #nStroke {stroke: #FFFFFF; stroke-width: 2; stroke-miterlimit: 10; width: 139; height: 57; }",
          "#SVGID_1_ { stroke: #666666; fill: none; stroke-width: 2; stroke-miterlimit: 10; }",
          ".NOt { fill : #993300; }",
          ".YESt { fill : #006699; }",
          "#nButton:hover ~ #nStroke { stroke: #993300; }",
          ".NOt:hover ~ #nStroke { stroke: #993300; }",
          "#yButton:hover ~ #yStroke { stroke: #006699; }",
          ".YESt:hover ~ #yStroke { stroke: #006699; }"
        ]
      });
    }
    else if (type==="timer"){
      console.log("attaching a new UI instancce")
      tab.worker = tab.attach({
        contentScriptFile: [
          self.data.url("clear.js"),
          self.data.url("interfaceFrame.js"),
          self.data.url("draggability.js"),
          self.data.url("timerText.js"),
          self.data.url("idleTimeWatcher.js")
        ]
      })
      uiAttached = true;    
    }
  }
// USER INTERFACE OVER (VIEW)

//MODEL
  function entryConstructor(){
    this.website = getWebsiteName(tab);
    this.timeSpentD = 0;
    this.url = tab.url;   
    this.productive;
    this.lastVisited = new Date;
    // this.timeSpent_w = timeSpent_w,
    // this.timeSpent_m = timeSpent_m,
  }// CONSTRUCTOR ENDING  

//CONTROLLER
  var interval; //how often timer function will be called (every second)
  var offset;

  function timer(e){ //change name to timing engine   
    if (e === "start"){
      update();
    }
    
    function update() {
      var timePassed = delta();
      ss.storage[naming(tabs.activeTab)]["timeSpentD"] += timePassed; 
    }

    function delta() {
      var now = Date.now();
      var timePassed = now - offset;
      offset = now;
      return timePassed;
    }

    function reset() {
      time = 0;
      update();
    }           
  }
  //TIMER ENDING
 
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

  //function that pushes the time into the UI(Behind closure)
  function uiUpdater() {    
    var activeTime = timeFormatter(ss.storage[naming(tabs.activeTab)]["timeSpentD"]);
    tabs.activeTab.worker.port.emit("time_spent", activeTime);
    console.log(activeTime);     
  }

  // CONTROL FUNCTIONS
  appStart = function() {
    offset = Date.now();
    f= function(){
      timer("start");
      uiUpdater();
    }
    interval = setInterval(f, 1000);
    console.log("count has started");
  }
  
  appStop = function() {
    clearInterval(interval);
    interval = null;
    console.log("count has stopped");
    //UI clear
    tabs.activeTab.worker.port.emit("time_spent", "");
  } //CONTROL FUNCTIONS ENDING
//CONTROLLER ENDING

//CONTROLLER ACTIVATION BaBy!!!!
  if (!isLive){
    isLive = true;
    appStart(); 
  }
})


