function maxNumber(array = []){
    let resultArray = [];
    let highestNumber = Number.MIN_SAFE_INTEGER
    for(let i =0; i < array.length; i++){
        let highestNumberFlag = true;
        let currentElement = array[i]
        let rightElementsArray = array.slice(i+1);
        
        for(let j = 0; j < rightElementsArray.length; j++){
           highestNumber = rightElementsArray[j]
            if(currentElement <= highestNumber){
                highestNumberFlag = false;
                break;
            }
        }
        if(highestNumberFlag === true){
            resultArray.push(currentElement)
        }
    }
    console.log(resultArray.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17])