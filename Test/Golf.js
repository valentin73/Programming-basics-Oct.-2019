function golf(input) {
    let record = Number(input.shift());
    let holes = Number(input.shift());

    let hitsCounter = 0;
    let powerPoints = 0;
    let currentHolepoints = 0

    for (let nextHole = 0; nextHole < holes; nextHole++) {
        let neededPower = Number(input.shift());
        while (neededPower > currentHolepoints) {
            let currentPowerWord = input.shift();
            let length = currentPowerWord.length;
            hitsCounter++;
            for (let char = 0; char < length; char++) {
                powerPoints += currentPowerWord.charCodeAt(char);
            }
            powerPoints = (powerPoints / length);
            currentHolepoints += powerPoints;
            powerPoints = 0;
            if (neededPower <= currentHolepoints) {
                console.log(`New hole reached! Hits so far: ${hitsCounter}`);
            }
        }
        powerPoints = 0;
        currentHolepoints = 0;
    }
    if (record > hitsCounter) {
        console.log(`Yes, you won! Total hits: ${hitsCounter}`);
    } else {
        console.log(`Better luck next time... Total hits: ${hitsCounter}`);
    }
} golf([
    '7',
    '2',
    '200',
    'powerfulHit',
    'anotherPowerHit',
    '70',
    'F'

]
)