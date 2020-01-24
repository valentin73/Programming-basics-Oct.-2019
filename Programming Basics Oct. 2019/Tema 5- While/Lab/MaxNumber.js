function maxNumber(input){
    let numbers = Number(input.shift());

    let counter = 0;
    let max = Number.MIN_SAFE_INTEGER

    while(counter < numbers ){    
        let value = Number(input.shift());
        counter ++;
        if(value > max){
            max = value;
        }
    }
    console.log(max);
    
}