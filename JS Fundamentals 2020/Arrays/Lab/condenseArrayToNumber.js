function condenseArrayToNumber(numbersArr) {
    let sum = 0;
    while (numbersArr.length >1) {
        sum = 0;
        let condensedArray = [];
        for (let i = 0; i < numbersArr.length - 1; i++) {
            condensedArray[i] = numbersArr[i] + numbersArr[i + 1];
        }
        for (let number of condensedArray) {
            sum += number
        }
        numbersArr = condensedArray;
    }
    if(numbersArr.length ===1){
        sum = numbersArr[0]
    }
    console.log(sum);
}
condenseArrayToNumber([5,0,4,1,2])