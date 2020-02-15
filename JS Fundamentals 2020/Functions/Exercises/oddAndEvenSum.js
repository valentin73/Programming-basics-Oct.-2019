function oddAndEvenSum(number){
    let string = number.toString();
    let currentNumber = number;
    let oddSum = 0;
    let evenSum = 0;
    for(let lastDigitIndex = string.length - 1; lastDigitIndex >= 0; lastDigitIndex--){
        let currentNumber = Number(string[lastDigitIndex]);
        if(currentNumber % 2 === 0){
            evenSum += currentNumber;
        }else{
            oddSum +=currentNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)