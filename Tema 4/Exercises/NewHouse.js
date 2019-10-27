function newHouse(input){
    let flower = input.shift();
    let amount = input.shift();
    let budget = Number(input.shift());

    let price = 0;

    switch (flower){
        case("Roses"):
             price = amount * 5;
         if( amount > 80){
            price = price * 0.90;
         }break;

    }
}