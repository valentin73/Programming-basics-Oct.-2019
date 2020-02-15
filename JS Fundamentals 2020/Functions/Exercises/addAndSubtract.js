function addAndSubtract(firstNumber,secondNumber, thirdNumber){
    let result = 0
    function sum(firstNumber,secondNumber){
        result = firstNumber + secondNumber
    }  
    sum(firstNumber,secondNumber); 
    function subtract(thirdNumber){
        result = result - thirdNumber
    }
    subtract(thirdNumber)
    console.log(result);
}
addAndSubtract(1,17,30);