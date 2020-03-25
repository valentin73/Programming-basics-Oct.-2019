function factorialDivison(numberOne, numberTwo) {

    function factorialCalculator(number) {
        let sum = 1;
        for (let i = 1; i <= number; i++) {
            sum *= i;
        }
        return sum;
    }

    function recursiveFunc (number){
        if(number === 1){
            return 1
        }

        let sum = 1;
        sum = number * recursiveFunc(number - 1);
        
        return sum;
    }

    let firstFactorial = factorialCalculator(numberOne);
    let secondFactorial = factorialCalculator(numberTwo);
    console.log((firstFactorial / secondFactorial).toFixed(2));
}
factorialDivison(6,2);