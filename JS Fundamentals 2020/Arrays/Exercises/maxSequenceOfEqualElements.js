function maxSequenceOfEqualElements(array = []) {
    let sequentArray = [];
    let localSequentArray = [];
    let specalNumber = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let nextNumber = array[i + 1];

        if (currentNumber === nextNumber) {
            localSequentArray.push(currentNumber);
        } else {
            localSequentArray = [];
        }
        if (sequentArray.length < localSequentArray.length) {
            sequentArray = localSequentArray
            specalNumber = currentNumber
        }
    }
    sequentArray.push(specalNumber);
    console.log(sequentArray.join(' '));
}
maxSequenceOfEqualElements([0, 1, 1 ,5 ,2 ,2 ,6 ,3 ,3])