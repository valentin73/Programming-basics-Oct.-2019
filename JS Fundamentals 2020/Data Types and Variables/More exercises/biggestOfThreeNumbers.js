function biggestOfThreeNumbers(firstNum, secondNum, thirdNum){
    let numbersArray = [firstNum, secondNum, thirdNum];
    for(let i = 0; i < 3; i++){
    numbersArray.sort((a,b) => b - a);
        
    }
    console.log(numbersArray[0]);
}
biggestOfThreeNumbers(-2,7,3)