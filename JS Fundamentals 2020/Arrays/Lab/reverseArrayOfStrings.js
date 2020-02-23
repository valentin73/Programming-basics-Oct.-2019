function reverseArrayOfStrings(stringArr) {
    let swappedArr = [];
    
    for (let i = 0; i < stringArr.length / 2; i++) {
        let j = stringArr.length - 1 - i
        swapElements(stringArr, i, j)
    }


    function swapElements(stringArr, i, j) {
        let currentLeftElement = stringArr[i];
        let currentRightElement = stringArr[j];

        swappedArr[i] = currentRightElement
        swappedArr[j] = currentLeftElement
    }
    console.log(swappedArr.join(' '));
}
reverseArrayOfStrings(['a','b','c','d','e'])