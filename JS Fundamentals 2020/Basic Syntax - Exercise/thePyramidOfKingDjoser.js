function thePyramidOfKingDjoser(baseNumber, increment) {
    let stonesSum = 0;
    let marblesSum = 0;
    let lapisLazuliSum = 0;
    let goldSum = 0;

    let stones = 0;
    let marbles = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let stonesArea = 0;
    let marblesArea = 0;
    let lapisLazuliArea = 0;
    let goldArea = 0;

    let counter = 1;
    let stepCounter = Math.ceil(baseNumber / 2);
    let stepHeight = Math.floor(stepCounter * increment);
    let stepArea = 0;

    for (let widthAndLength = baseNumber; widthAndLength >= 1; widthAndLength -= 2) {
        stepArea = widthAndLength * widthAndLength;

        if (counter % 5 !== 0 && counter !== stepCounter) {
            stonesArea = Math.ceil((widthAndLength - 2) * (widthAndLength - 2))
            stones = stonesArea * increment;
            marblesArea = Math.ceil(stepArea - stonesArea);
            marbles = marblesArea * increment;
            stonesSum += stones;
            marblesSum += marbles
        } else if (counter % 5 === 0 && counter !== stepCounter) {
            stonesArea = Math.ceil((widthAndLength - 2) * (widthAndLength - 2))
            stones = stonesArea * increment;
            lapisLazuliArea = Math.ceil(stepArea - stonesArea)
            lapisLazuli = lapisLazuliArea * increment;
            stonesSum += stones;
            lapisLazuliSum += lapisLazuli;
        } else if (counter === stepCounter) {
            goldArea = Math.ceil(stepArea * increment)
            gold = goldArea
            goldSum += gold;
        }
        counter++
    }
    console.log(`Stone required: ${Math.ceil(stonesSum)}`);
    console.log(`Marble required: ${Math.ceil(marblesSum)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliSum)}`);
    console.log(`Gold required: ${Math.ceil(goldSum)}`);
    console.log(`Final pyramid height: ${stepHeight}`);

}
thePyramidOfKingDjoser(11, 0.75)