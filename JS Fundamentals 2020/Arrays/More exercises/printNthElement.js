function printNthElement(array = []) {
    let stepNumber = Number(array[array.length - 1]);
    let resultArray = [];
    for(let i = 0; i < array.length - 1; i += stepNumber){
        resultArray.push(array[i])
    }
    console.log(resultArray.join(' '));
    
}
printNthElement(['dsa', 'asd', 'test', 'test', '2'])