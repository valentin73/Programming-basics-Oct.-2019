function newHouse(input) {
    let flower = input.shift();
    let amount = input.shift();
    let budget = Number(input.shift());

    let price = 0;

    switch (flower) {
        case ("Roses"):
            price = amount * 5;
            if (amount > 80) {
                price = price - (price * 0.10);
            } break;
        case ("Dahlias"): {
            price = amount * 3.80;
            if (amount > 90) {
                price = price - (price * 0.15);
            }
        }; break;
        case ("Tulips"): {
            price = amount * 2.80;
            if (amount > 80) {
                price = price - (price * 0.15);
            }
        }; break;
        case ("Narcissus"): {
            price = amount * 3;
            if (amount < 120) {
                price = price + (price * 0.15);
            }
        }; break;
        case ("Gladiolus"): {
            price = amount * 2.50;
            if (amount < 80) {
                price = price + (price * 0.20);
            }
        }
            
    }
    let moneyLeft = budget - price;
            if (budget >= price) {
                console.log(`Hey, you have a great garden with ${amount} ${flower} and ${moneyLeft.toFixed(2)} leva left.`);
            
            }else{
                console.log(`Not enough money, you need ${Math.abs(moneyLeft).toFixed(2)} leva more.`);
                
            }
}
newHouse(["Dahlias", 112,460])