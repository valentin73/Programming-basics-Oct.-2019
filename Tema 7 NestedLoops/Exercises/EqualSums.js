function equalSums(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let oddSum = 0;
    let evenSum = 0;

    let output = ""
    for (let number = firstNumber; number >= secondNumber; number++) {
        let numberString = number.toString();
        let digitLenght = numberString.length;
        for(let i = 0; i <=digitLenght - 1; i++){
            let currentNumber = number[i]
            if(i %  2 == 0){
                evenSum += number
            }else{
                oddSum += number
            }
            if(oddSum == evenSum){
                output += `${number} `
            }
        }
        console.log(output)

    }
} equalSums([100000, 100050])