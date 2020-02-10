function bitcoinMining(input) {
    let bitcoinValue = 11949.16;
    let goldValue = 67.51

    let currentMoney = 0;
    let totalMoney = 0;
    let dayOfTheFirstBitcoin = null;
    let currentBitcoins = 0;
    let bitcoinCounter = 0;
    for (let dayNumber = 0; dayNumber < input.length; dayNumber++) {
        let currentDayWinnings = input[dayNumber];
        if ((dayNumber + 1) % 3 === 0) {
            currentDayWinnings = currentDayWinnings * 0.7;
        }
        currentMoney = currentDayWinnings * goldValue;
        totalMoney += currentMoney;
        if (totalMoney >= bitcoinValue) {
            currentBitcoins = Math.floor(totalMoney / bitcoinValue);
            bitcoinCounter += currentBitcoins;
            totalMoney = totalMoney - (currentBitcoins * bitcoinValue);
            if (dayOfTheFirstBitcoin === null) {
                dayOfTheFirstBitcoin = (dayNumber + 1);
                console.log(`Day of the first purchased bitcoin : ${dayOfTheFirstBitcoin}`);
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}
bitcoinMining([50, 100, 500])