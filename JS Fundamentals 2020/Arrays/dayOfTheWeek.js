function dayOfTheWeek(day){  
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];
    
    if(1 <= day && day <= 7){
        console.log(days[day - 1]);
    }else{
        console.log('Invalid day!');
    }
}
dayOfTheWeek(888)