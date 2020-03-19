function simpleCalculator(firstNumber, secondNumber, operation) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch(operation){
        case("multiply"):{
            return multiply(firstNumber, secondNumber);
        }
        case("divide"):{
            return divide(firstNumber, secondNumber);
        }
        case("add"):{
            return add(firstNumber, secondNumber);
        }
        case("subtract"):{
            return subtract(firstNumber, secondNumber);
        }
    }
}
console.log(simpleCalculator(5,5,"multiply"));