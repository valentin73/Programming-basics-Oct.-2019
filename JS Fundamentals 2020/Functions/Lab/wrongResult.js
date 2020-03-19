function wrongResult(firstNumber, secondNumber, thirdNumber) {
    let isNegative = 0
    let stop = false;
    function currentNumber(number) {
        if (number < 0) {
            isNegative++;
        } else if (number === 0) {
            stop = true;
        }
    }
    currentNumber(firstNumber);
    currentNumber(secondNumber);
    currentNumber(thirdNumber);
    if (!stop) {
        if (isNegative % 2 === 0 ) {
            console.log('Positive');
        } else {
            console.log('Negative');
        }
    } else {
        console.log("Positive");
    }

}
wrongResult(1, 2, 1)