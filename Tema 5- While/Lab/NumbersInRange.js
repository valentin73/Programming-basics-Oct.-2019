function numbersInRange(input){
    let number = Number(input.shift());

    while(number < 1 || number >100){
        console.log("Invalid Number!");
        number = Number(input.shift());
    }
    console.log(`The number is: ${number}`);
    
}
numbersInRange([105,0,-200,77,102])
