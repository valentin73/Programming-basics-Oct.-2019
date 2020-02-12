function amazingNumbers(number){
    let string = number.toString();
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        let currentNum = Number(string[i]); 
        sum += currentNum;
        
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumbers(1233)