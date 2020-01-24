function cinema(input) {
    let type = input.shift();
    let r = +input.shift();
    let c = +input.shift();

    let income;
    switch (type) {
        case ("Premiere"): {
            income = 12 * r * c;

        }; break;
        case ("Normal"): {
            income = 7.5 * r * c;
        }; break;
        case ("Discount"): {
            income = 5 * r * c;
        }; break;

    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Normal", 21, 13])