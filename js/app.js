// countdown timer with js
// get date we are counting down to to
let countDOwnDate = new Date("june 6, 2021 00:00:00").getTime();
console.log(countDOwnDate);

startCountDown = () => {
    // get todays date and time
    let now = new Date().getTime();
    console.log(now);

    // get difference btween countdown and now/today
    let timeDiff = countDOwnDate - now;

    // calcute the number days
    let days = Math.floor(timeDiff / (1000 * 60 * 60 *24));

    // calculate number of hours
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // calculate number of minutes
    let minute = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)) 

    // calculate number of seconds
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000) 

    document.querySelector("#days").textContent = days;
    document.querySelector("#hours").textContent = hours;
    document.querySelector("#minutes").textContent = minute;
    document.querySelector("#seconds").textContent = seconds;


    // clear interval if timeDiff is less than 0
    if(timeDiff < 0) {
        clearInterval(startCountDown);

        document.querySelector("#days").textContent = 00;
        document.querySelector("#hours").textContent = 00;
        document.querySelector("#minutes").textContent = 00;
        document.querySelector("#seconds").textContent = 00;
    }

}

// run the startCountDown every 1s
setInterval(startCountDown, 1000);