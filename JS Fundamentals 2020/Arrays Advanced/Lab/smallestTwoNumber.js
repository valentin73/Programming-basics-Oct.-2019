function smallestTwoNumber(array = []){
    let smallestTwo = array
    .sort((a, b) => a - b)
    .slice(0,2)
    .join(' ')

    console.log(smallestTwo);
}
smallestTwoNumber([3, 0, 10, 4, 7, 3]);