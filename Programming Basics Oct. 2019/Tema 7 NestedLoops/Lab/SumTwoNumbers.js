function sumTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let result = 0;

    let currentFirstNumber  = 0;
    let currentSecondNumber = 0;
    let flag = false;
    for (let x = startInterval; x <= endInterval; x++) {
        for (let y = startInterval; y <= endInterval; y++) {
            currentFirstNumber = x;
            currentSecondNumber = y;
            counter++;
            result = x + y;
            
            if(result === magicNumber){
                  flag = true 
                break;
            }      
        }if(flag){
            break;
        }
        
    }if(flag){
        console.log(`Combination N:${counter} (${currentFirstNumber} + ${currentSecondNumber} = ${magicNumber})`);
    }else{
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}
sumTwoNumbers([88, 888, 1000])
