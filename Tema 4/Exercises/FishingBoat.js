function fishingBoat(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let fishermen = Number(input.shift());

    let price = 0;
    switch (season) {
        case ("Spring"):{
            price = 3000;
            if (fishermen <= 6) {
                price = price - (price * 0.10);
            } else if (fishermen >= 7 && fishermen <= 11) {
                price = price - (price * 0.15);
            } else if (fishermen >= 12) {
                price = price - (price * 0.25);
            }
            if (fishermen % 2 === 0) {
                price = price - (price * 0.05)
            }

        }   break;
        case ("Summer"):{
            price = 4200;
            if (fishermen <= 6) {
                price = price - (price * 0.10);
            } else if (fishermen >= 7 && fishermen <= 11) {
                price = price - (price * 0.15);
            } else if (fishermen >= 12) {
                price = price - (price * 0.25);
            }
            if (fishermen % 2 === 0) {
                price = price - (price * 0.05)
            }
          }  break;
        case ("Autumn"):{
            price = 4200;
            if (fishermen <= 6) {
                price = price - (price * 0.10);
            } else if (fishermen >= 7 && fishermen <= 11) {
                price = price - (price * 0.15);
            } else if (fishermen >= 12) {
                price = price - (price * 0.25);
            }
          }  break;
        case ("Winter"):{
            price = 2600;
            if (fishermen <= 6) {
                price = price - (price * 0.10);
            } else if (fishermen >= 7 && fishermen <= 11) {
                price = price - (price * 0.15);
            } else if (fishermen >= 12) {
                price = price - (price * 0.25);
            }
            if (fishermen % 2 === 0) {
                price = price - (price * 0.05)
            }
           }   break;
    }
    let diff = budget - price;
    if(diff >= 0){
        console.log(`Yes! You have ${(diff).toFixed(2)} leva left.`);
        
    }else if(diff < 0){
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
        
    }
}
fishingBoat([9000,"Autumn",6])