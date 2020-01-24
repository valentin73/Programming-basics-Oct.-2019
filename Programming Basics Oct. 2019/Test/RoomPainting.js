function roomPainting(input){
    let paint = Number(input[0]);
    let rolls = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushesPrice = Number(input[3]);

    let paintPrice = paint * 21.50;
    let rollsPrice = rolls * 5.20;
    let glovesCount = Math.ceil(rolls * 0.35);
    let brushCount = Math.floor(paint * 0.48);
    let glovesFullPrice = glovesCount * glovesPrice;
    let brushesFullPrice = brushCount * brushesPrice;

    let totalSum = paintPrice + rollsPrice + glovesFullPrice + brushesFullPrice;

    let delivery = totalSum / 15;
    
    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`)
}
roomPainting([10,8,2.2,5])