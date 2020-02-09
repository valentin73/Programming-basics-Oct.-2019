function sumOfOddNumbers(amountOfNumbers){
    let counter = 0;
    let firstNumber = 1
    let sum = 0
    while(counter < amountOfNumbers){
        if(firstNumber % 2 !== 0){
            console.log(firstNumber)
            counter++;
            sum += firstNumber
        }
        firstNumber++;
    }
    console.log(`Sum: ${sum}`)
}
sumOfOddNumbers(5)