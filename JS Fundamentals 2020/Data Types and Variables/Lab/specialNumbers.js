function specialNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        let currentNumber = i
        if (currentNumber >= 10) {
            while (currentNumber !== 0) {
                let lastDigit = currentNumber % 10;
                sum += lastDigit;
                currentNumber = parseInt(currentNumber / 10);
            }
        } else {
            sum = currentNumber;
        }
        if(sum === 5 || sum===7 || sum ===11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
        sum = 0;
    }
}
specialNumbers(15)