/*
    //IDLE WATCHER
    var t;
    var idle;
    document.body.onload = resetTimer;
    document.body.onmousemove = resetTimer;
    document.body.onkeypress = resetTimer;


    function logout() {
        idle = true;
        self.port.emit("idle", idle);
    }

    function activeagain() {
        idle = false;
        self.port.emit("idle", idle);
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(logout, 30000)
        // 1000 milisec = 1 sec

        if (idle === true) {
            activeagain();
        }
    };
*/