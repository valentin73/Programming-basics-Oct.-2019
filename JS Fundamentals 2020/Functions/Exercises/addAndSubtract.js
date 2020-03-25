function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    let sumResult = sum(firstNumber, secondNumber);
    let fullResult = subtract(sumResult, thirdNumber);

    console.log(fullResult);

}
addAndSubtract(1, 2, 1);