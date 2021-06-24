
let exam_date = new Date("Jul 13, 2020 00:00:00")

let timer_for_exam = setInterval(function () {
    let current_date = new Date().getTime()
    let time_difference = exam_date - current_date

    if (time_difference >= 0) {
        let days = Math.floor(time_difference / (1000 * 60 * 60 * 24))
        let hours = Math.floor((time_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((time_difference % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((time_difference % (1000 * 60)) / 1000)


        document.getElementById("exam-timer-days").
            innerHTML = days + "\t\t"
        document.getElementById("exam-timer-hours").
            innerHTML = ("0" + hours).slice(-2) + "\t\t"
        document.getElementById("exam-timer-minutes").
            innerHTML = ("0" + minutes).slice(-2) + "\t\t"
        document.getElementById("exam-timer-seconds").
            innerHTML = ("0" + seconds).slice(-2) + "\t\t"
    } else {
        // we print that we finished
    }
}, 1000)



