function negativePositiveNumber(array = []){
    let resultArray = [];
    for(let number of array){
        if(number >= 0){
            resultArray.push(number);
        }else{
            resultArray.unshift(number)
        }
    }
    for(let newNum of resultArray){
        console.log(newNum);
    }
}
negativePositiveNumber([7, -2, 8, 9])
negativePositiveNumber([3, -2, 0, -1])