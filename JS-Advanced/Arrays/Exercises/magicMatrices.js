function magicMatrices(input = []) {
    function colCheck(input) {
        let currentSum = 0;
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                let currentNumber = input[j][i]
                currentSum += currentNumber;
            }
            if (currentSum !== magicNumber) {
                isMagic = false;
                return isMagic;
            }
            currentSum = 0;
        }
    }
    function rowCheck(input) {
        for (const row of input) {
            let currentRow = row.reduce((acc, curr) => acc += curr, 0);
            if (currentRow !== magicNumber) {
                isMagic = false;
                return isMagic;
            }
        }
    }
    const magicNumber = input[0].reduce((acc, curr) => acc += curr, 0);

    let isMagic = true;

    rowCheck(input);
    colCheck(input);


    console.log(isMagic);
}
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);