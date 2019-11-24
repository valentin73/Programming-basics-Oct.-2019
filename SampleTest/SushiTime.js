function sushi(input) {
    let type = input[0];
    let restaurant = input[1];
    let amount = Number(input[2]);
    let delivery = input[3];

    let sushiPrice = 0;
    let totalPrice = 0;

    let flag = false;
    switch (restaurant) {
        case ("Sushi Zone"): {
            switch (type) {
                case ("sashimi"): {
                    sushiPrice += (amount * 4.99);
                } break;
                case ("maki"): {
                    sushiPrice += (amount * 5.29);
                } break;
                case ("uramaki"): {
                    sushiPrice += (amount * 5.99);
                } break;
                case ("temaki"): {
                    sushiPrice += (amount * 4.29);
                } break;
            }
        } break;
        case ("Sushi Time"): {
            switch (type) {
                case ("sashimi"): {
                    sushiPrice += (amount * 5.49);
                } break;
                case ("maki"): {
                    sushiPrice += (amount * 4.69);
                } break;
                case ("uramaki"): {
                    sushiPrice += (amount * 4.49);
                } break;
                case ("temaki"): {
                    sushiPrice += (amount * 5.19);
                } break;
            }
        } break;
        case ("Sushi Bar"): {
            switch (type) {
                case ("sashimi"): {
                    sushiPrice += (amount * 5.25);
                } break;
                case ("maki"): {
                    sushiPrice += (amount * 5.55);
                } break;
                case ("uramaki"): {
                    sushiPrice += (amount * 6.25);
                } break;
                case ("temaki"): {
                    sushiPrice += (amount * 4.75);
                } break;
            }
        } break;
        case ("Asian Pub"): {
            switch (type) {
                case ("sashimi"): {
                    sushiPrice += (amount * 4.50);
                } break;
                case ("maki"): {
                    sushiPrice += (amount * 4.80);
                } break;
                case ("uramaki"): {
                    sushiPrice += (amount * 5.50);
                } break;
                case ("temaki"): {
                    sushiPrice += (amount * 5.50);
                } break;
            }
        } break;
        default: {
            flag = true;
        }
    }
    if (!flag) {
        if (delivery == "Y") {
            totalPrice = sushiPrice + (sushiPrice * 0.20)
        } else {
            totalPrice = sushiPrice
        }
        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
    }else{
        console.log(`${restaurant} is invalid restaurant!`);
        }
}

sushi(['sashimi', 'SASA', '3', 'Y', '']);