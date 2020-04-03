function searchForNumber(numbers = [], commandNumbers = []) {
    let takeElements = commandNumbers[0];
    let deleteElements = commandNumbers[1];
    let searchFor = commandNumbers[2];

    let takenNumbers = numbers.slice(0, takeElements);
    takenNumbers.splice(0, deleteElements);
    takenNumbers = takenNumbers.filter(x => x === searchFor)
    // let counter = 0

    // for (let number of takenNumbers) {
    //     if(number === searchFor){
    //         counter++
    //     } 
    // }
    console.log(`Number ${searchFor} occurs ${takenNumbers.length} times.`);
}
searchForNumber([5, 2, 3, 3, 3, 3, 3, 3, 4, 1, 6],
    [5, 2, 3]
)