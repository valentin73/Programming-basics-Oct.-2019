function magicMatrices(array = []) {
    let isMagic = true;

    let rowsSum = 0;
    let colsSum = 0;
    for (let number of array[0]) {
        rowsSum += number
    }

    for (let i = 0; i < array.length; i++) {
        let currentCell = array[i];
        for (let j = 0; j < currentCell.length; j++) {
            let currentDigit = currentCell[j];
            colsSum += currentDigit;
            if (i % array.length !== 0 || i === 0) {
                break;
            }
        }
        if (i !== 0 && i % array.length === 0) {
            i = 0;
        }
    }
    array.map(rowsSumFcn)
    function rowsSumFcn(currentArray) {
        let currentRowsSum = 0;
        for (let number of currentArray) {
            currentRowsSum += number;
        }
        if (currentRowsSum !== rowsSum) {
            isMagic = false;
        }
        return isMagic;
    }
    colsSumFcn(array)
    function colsSumFcn(array) {
        let currentColsSum = 0;
        for (let i = 0; i < array.length * array.length; i++) {
            let currentCell = array[i];
            for (let j = 0; j < currentCell.length; j++) {
                let currentDigit = currentCell[j];
                currentColsSum += currentDigit;
                if (i % array.length !== 0 || i === 0) {
                    break;
                }
            }
            if (i !== 0 && i % array.length === 0) {
                i = 0
            }
        }
        if (currentColsSum !== colsSum) {
            isMagic = false;
        }
        return isMagic;
    }
    if (rowsSumFcn && colsSumFcn) {
        console.log(isMagic);
    } else {
        console.log(isMagic);
    }


}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)