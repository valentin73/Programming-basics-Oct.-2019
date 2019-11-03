function onTime(input){
    let examHour = +input.shift();
    let examMinute = +input.shift();
    let arriveHour = +input.shift();
    let arriveMunute = +input.shift();

    let examTimeInMin = examHour * 60 + examMinute;
    let arriveTimeInMin = arriveHour * 60 + arriveMunute;
    
}