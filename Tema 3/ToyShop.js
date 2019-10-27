function toyShop(input) {
    let tripPrice = Number(input.shift());
    let puzzles = Number(input.shift());
    let dolls = Number(input.shift());
    let teddyBears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());

    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearPrice = teddyBears * 4.10;
    let priceMinion = minions * 8.20;
    let truckPrice = trucks * 2;

    let allToys = puzzles + dolls + teddyBears + minions + trucks;
    let fullPrice = puzzlesPrice + dollsPrice + bearPrice + priceMinion + truckPrice;

    if (allToys >= 50) {
        fullPrice = fullPrice - fullPrice * 0.25;   
    }
    let profit = fullPrice - fullPrice * 0.10;
    
    if (profit >= tripPrice){
        let moneyLeft = profit - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
        
    } else {
        let notEnough = tripPrice - profit;
        console.log(`Not enough money! ${notEnough.toFixed(2)} lv needed.`);
        
    }
}
toyShop([75.24, 2, 3, 4, 5, 6])