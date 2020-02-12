function fuelMoney(distance, passengers, priceOfDiesel){
    let fuelNeeded = 7 + (passengers * 0.1);
    console.log(fuelNeeded * priceOfDiesel);
    let moneyNeeded = (fuelNeeded * priceOfDiesel) * distance / 100;
    console.log(`Needed money for that trip is ${moneyNeeded.toFixed(3)} lv`);
}
fuelMoney(260,9,2.49)