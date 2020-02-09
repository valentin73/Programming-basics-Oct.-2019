function rounding(number, rounder) {
    if (rounder > 15) {
        rounder = 15
    }
    let roundedNumber = parseFloat(number.toFixed(rounder));
    console.log(roundedNumber);
}
rounding(3.1412442124124, 16)