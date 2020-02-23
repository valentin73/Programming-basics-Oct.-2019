function sumFirstAndLastElement(input) {
    let firstNumber = Number(input.shift())
    let lastNumber = Number(input.pop())
    let sum = firstNumber + lastNumber

    console.log(sum);
}
sumFirstAndLastElement(['20', '30', '40'])