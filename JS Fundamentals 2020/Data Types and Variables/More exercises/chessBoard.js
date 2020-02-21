function chessBoard(sizeNumber) {
    let resultOfBlackAndWhite = "";
    let halfRes = "";
    let result = "";
    let oddPlaces = `<span class ="black"></span>`
    let evenPlaces = `<span class ="white"></span>`
    for (let k = 1; k <= sizeNumber; k++) {
        for (let i = 1; i <= sizeNumber; i += 2) {
            for (let j = i + 1; j <= (i + 1); j += 2) {
                if (sizeNumber % 2 === 0) {
                    if (j > sizeNumber) {
                        resultOfBlackAndWhite += `\n${oddPlaces}`
                        break;
                    }
                } else {
                    if (j > sizeNumber) {
                        resultOfBlackAndWhite += `     ${oddPlaces}\n`
                        break;
                    }
                }
                halfRes += `     ${oddPlaces}\n     ${evenPlaces}\n`
            }
            result = `\n  <div>\n${resultOfBlackAndWhite}  </div>`
        }
    }
    console.log('<div class="chessboard">' + result);
}
chessBoard(3)