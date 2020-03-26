function numberModification(number) {
    function avarageSumOfDigits(currentNumber) {
        let result = 0;
        let digitsCount = 0;
        while (currentNumber > 0) {
            let currentDigit = currentNumber % 10;
            result += currentDigit;
            currentNumber = parseInt(currentNumber / 10);
            digitsCount++;
        }
        return result / digitsCount;
    }

    function isHigherThanFive(digitsSum) {
        return digitsSum > 5 ? true : false;
    }

    function addNineToTheEnd(number) {
        let numToString = number.toString() + '9';
        return Number(numToString)
    }

    let avarageSumOfDigitsValue = avarageSumOfDigits(number);

    let isHigherThanFiveValue = isHigherThanFive(avarageSumOfDigitsValue);

    if (isHigherThanFiveValue) {
        console.log(number);
    } else {
        while (isHigherThanFiveValue === false) {
            let addNineToTheEndVlaue = addNineToTheEnd(number);
            number = addNineToTheEndVlaue;
            avarageSumOfDigitsValue = avarageSumOfDigits(number);
            isHigherThanFiveValue = isHigherThanFive(avarageSumOfDigitsValue);
        }
        console.log(number);
    }
}
numberModification(101)