function stopwatch() {
    const timeDiv = document.getElementById('time');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', start);
    stopBtn.addEventListener('click', stop);

    let seconds = 0;
    let minutes = 0;
    let intervalId;

    function timeCalculator(seconds,minutes){
        let resultSec = seconds;
        let resultMin = minutes;
        if(seconds < 10){
             resultSec = '0' + seconds;
        }
        if(minutes < 10){
            resultMin = '0' + minutes;
       }
        timeDiv.textContent = `${resultMin}:${resultSec}`
    }

    function start() {
        seconds = 0;
        minutes = 0;
        timeCalculator(seconds, minutes);

        startBtn.setAttribute('disabled', true);
        stopBtn.removeAttribute('disabled')
        intervalId = setInterval(function () {
            seconds++
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            timeCalculator(seconds, minutes);
        }, 1000);
    }

    function stop() {
        stopBtn.setAttribute('disabled', true);
        startBtn.removeAttribute('disabled')

        clearInterval(intervalId);
    
    }
}