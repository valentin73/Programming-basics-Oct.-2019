function vacation(input) {
    let vacationPrice = Number(input.shift());
    let money = Number(input.shift());

    let daysCounter = 0;
    let spendDaysCounter = 0;
    let isEnough = true;
    while (money < vacationPrice && spendDaysCounter < 5) {
        let action = input.shift();
        let sum = Number(input.shift());
        daysCounter++;
        if (action === "spend") {
            spendDaysCounter++;
            money -= sum;
            if (money < 0) {
                money = 0
            }
            if (spendDaysCounter == 5) {
                isEnough = false
                console.log(`You can't save the money.`);
                console.log(daysCounter);
                break;
            }
        } else {
            money += sum;
            spendDaysCounter = 0;

        }

    }
    if (isEnough) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}


vacation([
    '110', '60', 'spend',
    '10', 'spend', '10',
    'spend', '10', 'spend',
    '10', 'spend', '10'
])