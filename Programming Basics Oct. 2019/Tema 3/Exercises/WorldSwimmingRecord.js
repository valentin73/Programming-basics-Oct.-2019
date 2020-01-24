function swimmingRecord(input){
    let record = Number(input.shift());   
    let distance = Number(input.shift());    
    let timeForMeter = Number(input.shift());    
 
    let waterSlow =(Math.floor(distance / 15)) * 12.5; 
    let swimTime = (distance * timeForMeter) + waterSlow;

    if(swimTime < record){
        console.log(`Yes, he succeeded! The new world record is ${(swimTime).toFixed(2)} seconds.`);
        
    }else{
        console.log(`No, he failed! He was ${Math.abs(swimTime - record).toFixed(2)} seconds slower.`);
        
    }
}
swimmingRecord([55555.67, 3017, 5.03])