function bachelorParty(input){
    let index = 0
    let singer = Number(input[index]);
    index++;
    let command = Number(input[index]);

    let humansCount = 0;
    let totalMoney = 0;
    
    while(command !== "The restaurant is full"){
        command = (input[index]);
        index++;
        if(command !== "The restaurant is full"){
            command = Number(command)
            humansCount += command;
            if(command < 5){
                totalMoney += (command * 100);
            }else {
                totalMoney += (command * 70);
            }
        }

    }
    if(totalMoney >= singer){
        console.log(`You have ${humansCount} guests and ${totalMoney - singer} leva left.`);
        
    }else{
        console.log(`You have ${humansCount} guests and ${totalMoney} leva income, but no singer.`);
        
    }

}

bachelorParty([ '3200', '5', '12', '6', '6', '12', 'The restaurant is full' ])