function walking(input){
    let goal = 10000;
    let counterSteps = 0;
    while(counterSteps <= goal){
        let data = input.shift();   
        if(data != " Going home"){
            data = Number(data);
            let steps = data;
        }else{
            
        }
        counterSteps += steps
    }
}