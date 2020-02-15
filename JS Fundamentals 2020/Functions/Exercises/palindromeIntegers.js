function palindromeIntegers(numbersArray){
    let amountOfNumbers = numbersArray.length;
    for(let i = amountOfNumbers; i > 0; i--){
        let currentNumber = numbersArray.shift();
        let numberToString = currentNumber.toString();
        let numberReversed = numberToString.split("").reverse().join("");
        if(numberReversed === numberToString){
            console.log('true');
        }else{
            console.log('false');
        }
    }

}  
palindromeIntegers([123,323,421,121])