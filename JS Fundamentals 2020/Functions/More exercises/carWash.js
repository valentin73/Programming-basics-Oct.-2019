function carWash(commandsArr = []) {
    let result = 0;
    for (let command of commandsArr) {
        switch (command) {
            case ('soap'): {
                result += 10;
                break;
            }
            case ('water'): {
                result *= 1.20;
                break;
            }
            case ('vacuum cleaner'): {
                result *= 1.25;
                break;
            }
            case ('mud'): {
                result *= 0.90;
                break;
            }
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])