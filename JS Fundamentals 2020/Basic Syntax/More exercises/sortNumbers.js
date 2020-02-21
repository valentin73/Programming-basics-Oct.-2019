function sortNumbers(firstNumber, secondNumber, thirdNumber){
    let numbersArray = [firstNumber, secondNumber, thirdNumber];
    for(let i = 0; i < 3; i++){
    numbersArray.sort((a,b) => b-a);
    console.log(numbersArray[i]);
    }
}
sortNumbers(4, 1, 9);