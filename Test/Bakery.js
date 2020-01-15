function bakery(input) {
    let whiteBreadPrice = Number(input.shift());
    let whiteBread = Number(input.shift());
    let wholeGrainBread = Number(input.shift());
    let pretzel = Number(input.shift());
    let Croasant = Number(input.shift());
    let holiday = input.shift();


    let wholeGrainBreadPrice = whiteBreadPrice + (whiteBreadPrice * 0.20);
    let pretzelPrice = wholeGrainBreadPrice - (wholeGrainBreadPrice * 0.20);
    let CroasantPrice = pretzelPrice + 1.50;
  

    let totalWhiteBread = whiteBreadPrice * whiteBread;
    let totalWholeGrain = wholeGrainBreadPrice * wholeGrainBread;
    let totalPretzel = pretzelPrice * pretzel;
    let totalCroasant = Croasant * CroasantPrice;
    


    let totalSum = 0

    if (holiday == "yes") {
        let miniCakes = Number(input.shift());
        let donuts = Number(input.shift());
        let miniCakesPrice = whiteBreadPrice * 0.80;
        let donutsPrice = miniCakesPrice * 0.45;
        let totalMiniCakes = miniCakesPrice * miniCakes;
        let totalDonuts = donuts * donutsPrice;
        totalSum = totalWhiteBread + totalWholeGrain + totalPretzel + totalCroasant + totalMiniCakes + totalDonuts
        console.log(`Happy holidays! This will cost you ${totalSum.toFixed(2)} lv.`);
    } else if (holiday == "no") {
        totalSum = totalWhiteBread + totalWholeGrain + totalPretzel + totalCroasant
        console.log(`The value of you order is ${totalSum.toFixed(2)} lv.`);
    }
} bakery(['1.5', '5', '2', '7', '2', 'no']
)