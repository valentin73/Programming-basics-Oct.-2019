function firstAndLastKNumbers(array = []) {
    let Knumber = array.shift();
    let firstNumbers = array.slice(0, Knumber);
    let LastNumbers = array.slice(array.length - Knumber)

    console.log(firstNumbers.join(' '));
    console.log(LastNumbers.join(' '));
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);
