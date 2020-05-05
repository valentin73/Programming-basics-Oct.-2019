function winter(input) {
    let honeyNeeded = Number(input.shift());

    let currentLine = input.shift();
    let currentBee = currentLine;

    let totalHoney = 0;
    let currentBeeTotal = 0;

    let counter = 0;

    while (currentLine !== 'Winter has come') {
        counter++;

        if (counter % 7 === 0) {
            currentLine = input.shift();
            if (currentBeeTotal < 0) {
                console.log(`${currentBee} was banished for gluttony`);
            }
            totalHoney += currentBeeTotal;
            if(totalHoney >= honeyNeeded){
                break;
            }
            currentBeeTotal = 0;
            currentBee = currentLine;
        } else {
            currentLine = Number(input.shift())
            currentBeeTotal += currentLine
        }

    }

    let honeyDiff = Math.abs(honeyNeeded - totalHoney);

    if (totalHoney < honeyNeeded) {
        console.log(`Hard Winter! Honey needed ${honeyDiff.toFixed(2)}.`);
    } else {
        console.log(`Well done! Honey surplus ${honeyDiff.toFixed(2)}.`);
    }

}
// winter([
//     '300',
//     'Beeatrice',
//     '50',
//     '-10',
//     '40',
//     '30',
//     '100',
//     '100',
//     'Winter has come'
// ])

winter(
    [
        '1000',
        'Maya',
        '1000',
        '0',
        '0',
        '0',
        '224',
        '0',
        'Yama',
        '201',
        '0',
        '0',
        '0',
        '0',
        '0',
        'Winter has come'

    ])