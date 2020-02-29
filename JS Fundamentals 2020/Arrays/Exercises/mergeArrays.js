function mergeArrays(firstArray, secondArray){
    let mergedArrays = [];
    for(let i = 0; i < firstArray.length;i++){
        if(i % 2 === 0){
            let firstNumber = Number(firstArray[i]);
            let secondNumber = Number(secondArray[i]);
            let sum = firstNumber + secondNumber
            mergedArrays.push(sum);
        }else{
            let firstString = firstArray[i];
            let secondString = secondArray[i]
            let concatenation = firstString + secondString
            mergedArrays.push(concatenation);
        }
    }
    console.log(mergedArrays.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)