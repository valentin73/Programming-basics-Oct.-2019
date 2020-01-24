function minNumber(input){
    let numbers = Number(input.shift());

    let counter = 0;
    let min = Number.MAX_SAFE_INTEGER

    while(counter < numbers ){    
        let value = Number(input.shift());
        counter ++;
        if(value < min){
            min = value;
        }
    }
    console.log(min);
    
}
minNumber([3,-10, 20,-30])