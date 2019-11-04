function onTime(input) {
    let examHour = +input.shift();
    let examMinute = +input.shift();
    let arriveHour = +input.shift();
    let arriveMunute = +input.shift();

    let examTimeInMin = examHour * 60 + examMinute;
    let arriveTimeInMin = arriveHour * 60 + arriveMunute;

    let timeDiff = examTimeInMin - arriveTimeInMin;
    let positiveTime = Math.abs(timeDiff);

    let hours = Math.floor(positiveTime / 60);
    let minutes = positiveTime % 60;
    if (timeDiff < 0) {
        console.log("Late");
        if (hours == 0) {
            console.log(`${minutes} minutes after the start`);

        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (timeDiff <= 30) {
        console.log("On time");
        if (timeDiff = 0) {

        } else {
            console.log(`${minutes} minutes before the start`);

        }
    } else if (timeDiff > 30) {
        console.log("Early");
        if (hours == 0) {
            console.log(`${minutes} minutes before the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}