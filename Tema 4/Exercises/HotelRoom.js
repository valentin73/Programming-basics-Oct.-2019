function hotelRoom(input) {
    let month = input.shift();
    let sleepovers = +input.shift();

    let priceApartment;
    let priceStudio;
    switch (month) {
        case ("May"):
        case ("October"): {
            priceStudio = sleepovers * 50;
            priceApartment = sleepovers * 65;
            if (sleepovers > 7 && sleepovers < 14) {
                priceStudio = priceStudio - (priceStudio * 0.05);
            } else if (sleepovers > 14) {
                priceStudio = priceStudio - (priceStudio * 0.30);
                priceApartment = priceApartment - (priceApartment * 0.10);
            }
        };break;
        case ("June"):
        case ("September"): {
            priceStudio = sleepovers * 75.20;
            priceApartment = sleepovers * 68.70;
            if (sleepovers > 14) {
                priceStudio = priceStudio - (priceStudio * 0.20);
                priceApartment = priceApartment - (priceApartment * 0.10);
            }
        };break;
        case ("July"):
        case ("August"): {
            priceStudio = sleepovers * 76;
            priceApartment = sleepovers * 77;
            if (sleepovers > 14) {
                priceApartment = priceApartment - (priceApartment * 0.10);
            }
        };break;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log((`Studio: ${priceStudio.toFixed(2)} lv.`));
       
}
hotelRoom(["June", 14])