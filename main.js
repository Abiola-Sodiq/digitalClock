// function startTime() {
//     let hours = document.getElementById("hours")
//     let minutes = document.getElementById("minutes")
//     let seconds = document.querySelector("#seconds")

//     let time = new Date()
//     hours.innerHTML = time.getHours()
//     minutes.innerHTML = time.getMinutes()
//     seconds.innerHTML= time.getSeconds ()
// }
// setInterval(startTime,10);

setInterval(() => {
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.querySelector("#seconds")
    let hour = hours.innerHTML

    let time = new Date()
    hours.innerHTML = time.getHours()
    minutes.innerHTML = time.getMinutes()
    seconds.innerHTML= time.getSeconds ()

    let amPm = document.getElementById("amPm")
    if (hour>=12) {
        amPm.innerHTML="pm"
    }
    if (hour>12) {
        hour = hour-12
        hours.innerHTML = hour
    }
    if (seconds.innerHTML<10) {
        seconds.innerHTML= "0" + seconds.innerHTML
    }
    if (minutes.innerHTML<10) {
        minutes.innerHTML= "0" + minutes.innerHTML
    }
}, 10);
