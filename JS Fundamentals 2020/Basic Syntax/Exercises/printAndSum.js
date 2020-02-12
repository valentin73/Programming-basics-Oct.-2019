function printAndSum(startNumber, endNumber){
    let sum = 0;
    let allNumbers = ""
    for(let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++){
        sum += currentNumber
        allNumbers += `${currentNumber} ` 
        
    }
    console.log(allNumbers);
    
    console.log(`Sum: ${sum}`)
}