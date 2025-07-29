const targetDate = new Date('August 5 , 2025 22:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0){
        document.getElementById("timer").innerHTML = "Countdown Finished!";
        clearInterval(timerInterval);
        return;

    }

    const days = Math.floor(distance / (1000 * 60 *60 *24));
    const hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 *60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();

