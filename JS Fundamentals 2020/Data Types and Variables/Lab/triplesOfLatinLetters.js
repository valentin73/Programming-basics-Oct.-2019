function triplesOfLatinLetters(number) {
    let firstNumber = 97 + number - 3;
    let lastNumber = 97 + number;
    for (let i = firstNumber; i < lastNumber; i++) {
        for (let j = firstNumber; j < lastNumber; j++) {
           for (let k = firstNumber; k < lastNumber; k++) {
               console.log(String.fromCharCode(i,j,k));    
           }
            
        }
    }
}
triplesOfLatinLetters(3)