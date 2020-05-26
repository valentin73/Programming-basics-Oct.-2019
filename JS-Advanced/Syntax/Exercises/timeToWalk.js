function timeToWalk(steps, footprint, speed){
    let length = steps * footprint;
    let restTime = Math.floor(length / 500);
    let walkTime = length / (speed* 1000) 
    let totalSeconds = Math.round((((walkTime * 100) / 100 *60) + restTime) * 60);
    
    let seconds = totalSeconds % 60;
    totalSeconds -= seconds;
    totalSeconds /= 60;
    let minutes = totalSeconds % 60;
    totalSeconds -= minutes;
    totalSeconds /= 60
    let hours = totalSeconds % 60

    console.log(`${padding(hours)}:${padding(minutes)}:${padding(seconds)}`);
    function padding(number){
        // if(number< 10){
        //     return `0${number}`
        // }else{
        //     return number
        // }
        return ((`0${number}`).slice(-2));
    }
}
timeToWalk(4000, 0.60, 5)