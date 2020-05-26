function gcd(number1, number2){
    let lowerNumber = Math.min(number1,number2);
    let greatestDivisor = 1;
    for (let i = 1; i <= lowerNumber; i++) {
        if(number1 % i === 0 && number2 % i === 0){
            greatestDivisor = i;
        }

    }
    console.log(greatestDivisor);
}
gcd(12, 5)