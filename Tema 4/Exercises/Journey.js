function journey(input) {
    let budget = +input.shift();
    let season = input.shift();

    let price;
    let destination;
    let vacationType;

    if (budget <= 100) {

        if (season === "summer") {
            price = budget * 0.30;
            vacationType = "Camp"
        } else {
            price = budget * 0.70;
            vacationType = "Hotel"
        }
        destination = "Bulgaria";
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            price = budget * 0.40;
            vacationType = "Camp";
        } else {
            price = budget * 0.80;
            vacationType = "Hotel"
        }

    } else if (budget > 1000) {
        destination = "Europe";
        price = budget * 0.90;
        vacationType = "Hotel";

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${price.toFixed(2)}`);

}


journey([312, "summer"])