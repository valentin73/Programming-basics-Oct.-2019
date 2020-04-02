function processOddNumbers(array = []) {
    let OddNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            OddNumbers.push(array[i])
        }
    }

    OddNumbers = OddNumbers.map(x => x * 2).reverse().join(' ');
    console.log(OddNumbers);

}
processOddNumbers([10, 15, 20, 25])