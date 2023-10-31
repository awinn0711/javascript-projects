// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    //create rocket image object and set position
    let imgObj = document.getElementById("rocket");
    imgObj.style.position = "absolute";
    imgObj.style.left = "50%";
    imgObj.style.right = "50%";
    imgObj.style.bottom = "0%";

    //set other variables
    let rocketBackground = document.getElementById("shuttleBackground");
    let status = document.getElementById("flightStatus");
    let altitude = 0;
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");


    //bonus
    let shuttleWidth = document.getElementById("spaceShuttleWidth");
    
    //take off button on click
    takeOffButton.addEventListener("click", function() {
        let isReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (isReady) {
            status.innerHTML = "Shuttle in flight.";
            rocketBackground.style.backgroundColor = "blue";
            altitude = 10000;
            shuttleHeight.innerHTML = `${altitude}`;
            imgObj.style.bottom = "10px";
        }
    });

    //landing button on click
    landingButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        rocketBackground.style.backgroundColor = "green";
        altitude = 0;
        shuttleHeight.innerHTML = `${altitude}`;
        imgObj.style.bottom = "0%";
    });

    //abort mission on click
    abortButton.addEventListener("click", function() {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            status.innerHTML = "Mission aborted.";
            rocketBackground.style.backgroundColor = "green";
            altitude = 0;
            shuttleHeight.innerHTML = `${altitude}`;
            imgObj.style.bottom = "0%";
        };
    });

    //directional buttons
    upButton.addEventListener("click", function() {
        altitude += 10000;
        shuttleHeight.innerHTML = `${altitude}`;
        let picUp = parseInt(imgObj.style.bottom, 10);
        imgObj.style.bottom = picUp + 10 + "px";
    });
    downButton.addEventListener("click", function() {
        altitude -= 10000;
        shuttleHeight.innerHTML = `${altitude}`;
        let picDown = parseInt(imgObj.style.bottom, 10);
        imgObj.style.bottom = (picDown - 10) + "px";
    });
    rightButton.addEventListener("click", function() {
        let picRight = parseInt(imgObj.style.right, 10);
    })


});


