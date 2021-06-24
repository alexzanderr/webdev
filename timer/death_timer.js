
let death_date = new Date("Dec 31, 2100, 00:00:00")

let timer_for_death = setInterval(function () {
    let current_date = new Date().getTime()
    let time_difference = death_date - current_date

    if (time_difference >= 0) {
        let days = Math.floor(time_difference / (1000 * 60 * 60 * 24))
        let hours = Math.floor((time_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((time_difference % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((time_difference % (1000 * 60)) / 1000)


        document.getElementById("death-timer-days").
            innerHTML = days + "\t\t"
        document.getElementById("death-timer-hours").
            innerHTML = ("0" + hours).slice(-2) + "\t\t"
        document.getElementById("death-timer-minutes").
            innerHTML = ("0" + minutes).slice(-2) + "\t\t"
        document.getElementById("death-timer-seconds").
            innerHTML = ("0" + seconds).slice(-2) + "\t\t"
    } else {
        // we print that we finished
    }
}, 1000)