function integerOrFloat(firstNum, secondNum, thirdNum){
    let result = firstNum + secondNum + thirdNum;
    result % 1 === 0 ? result += ' - Integer' : result += ' - Float';
    console.log(result);
}  
integerOrFloat(100,200,305)