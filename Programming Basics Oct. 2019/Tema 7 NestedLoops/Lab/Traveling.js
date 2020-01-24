function traveling(input) {
    let destination;
    let moneyNeeded;

    let moneySum = 0;
    let currentMoney;
    let currentDestination;
    while (destination !== "End") {
        destination = input.shift();
        moneyNeeded = Number(input.shift());
        while (moneySum < moneyNeeded) {
            currentMoney = Number(input.shift());
            moneySum += currentMoney;
            currentDestination = destination;
            if (moneySum >= moneyNeeded) {
                console.log(`Going to ${currentDestination}!`);
                moneySum = 0;
                break;
            }
            
        }
    }
}
traveling([
    'France', '2000', '300',
    '300', '200', '400',
    '190', '258', '360',
    'Portugal', '1450', '400',
    '400', '200', '300',
    '300', 'Egypt', '1900',
    '1000', '280', '300',
    '500', 'End', ''
])