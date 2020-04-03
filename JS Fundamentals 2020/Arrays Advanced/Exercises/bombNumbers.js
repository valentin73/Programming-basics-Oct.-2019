function bombNumbers(sequence = [], bombNumber = []) {

    let bomb = bombNumber[0];
    let bombPower = bombNumber[1];

    while (sequence.includes(bomb)) {
        if (sequence.includes(bomb)) {
            let index = sequence.indexOf(bomb);
            let firstIndex = index - bombPower;
            if (firstIndex >= 0) {
                sequence.splice(firstIndex, (bombPower * 2) + 1);
            }else {
                sequence.splice(0, (bombPower * 2) + 1 + firstIndex);
            }
        }
    }
    let result = 0;
    for (let number of sequence) {
        result += number
    }
    console.log(result);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 5]

)