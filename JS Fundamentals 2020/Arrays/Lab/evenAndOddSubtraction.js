function evenAndOddSubtraction(numbersArr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        numbersArr[i] = Number(numbersArr[i]);
    }
    for(let currentNumber of numbersArr){
        if(currentNumber % 2 ===0){
            evenSum += currentNumber
        }else{
            oddSum += currentNumber
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([0])