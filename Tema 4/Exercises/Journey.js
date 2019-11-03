function journey(input) {
    let budget = +input.shift();
    let season = input.shift();

    let price;
    let destination;
    let vacationType;
    switch (budget) {
        case (budget <= 100): {
           
            if (season === "summer") {
                price = budget * 0.30;
                vacationType = "Camp"
            } else {
                price = budget * 0.70;
                vacationType = "Hotel"
            }
            destination = "Bulgaria";
        }; break;
        case (budget >= 1000): {
            destination = "Balkans";
            if (season === "summer") {
                price = budget * 0.40;
                vacationType = "Camp";
            } else {
                price = budget * 0.80;
                vacationType = "Hotel"
            }

        }; break;
        case (budget > 1000): {
            destination = "Europe";
            price = budget * 0.90;
            vacationType = "Hotel";

        }; break;

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${price}`);
}
journey([50, "summer"])