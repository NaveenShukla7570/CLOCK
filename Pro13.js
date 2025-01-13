let hours = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    //Getting hours, mims, secs from date        
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hours.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);


 // 12 hours = 360 deg
 // 1 hours = 360/12 = 30
 // h hours = 30h + m/2

 // 60 min = 360deg
 // 1 min = 360/60 = 6 deg
 // M min = 6m

 // 60 sec = 360 deg
 // 1sec = 360/60= 6 deg
 // S secs = 6s 