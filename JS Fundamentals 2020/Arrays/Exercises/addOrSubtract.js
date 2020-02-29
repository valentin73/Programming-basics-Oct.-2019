function addOrSubtract(numbersArray){
    let modifiedArray =[];
    let arraySum = 0;
    let modifiedArraySum = 0;
    for(let i = 0; i < numbersArray.length;i++){
        let currentNumber = numbersArray[i];
        arraySum += currentNumber;
        if(currentNumber % 2 ===0){
            currentNumber += i;
            modifiedArray.push(currentNumber);
        }else{
            currentNumber -= i;
            modifiedArray.push(currentNumber)
        }
    }
    for(let num of modifiedArray){
        modifiedArraySum += num;
    }
    console.log(modifiedArray);
    console.log(arraySum);
    console.log(modifiedArraySum);
}
addOrSubtract([5, 15, 23, 56, 35])