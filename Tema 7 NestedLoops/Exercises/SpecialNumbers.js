function specialNumbers(input) {
    let number = Number(input[0]);

    let specialNumber = "";
    for (let x1 = 1; x1 <= 9; x1++) {
        for (let x2 = 1; x2 <= 9; x2++) {
            for (let x3 = 1; x3 <= 9; x3++) {
                for (let x4 = 1; x4 <= 9; x4++) {
                    if (number % x1 === 0 && number % x2 === 0 && number % x3 === 0 && number % x4 === 0) {
                        specialNumber += `${x1}${x2}${x3}${x4} `
                    }
                }
            }
        }
    }
    console.log(specialNumber);

}
specialNumbers([3])