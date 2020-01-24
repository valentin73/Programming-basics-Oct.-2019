function bookAFlight(input){
    let ticket = input[0];
    let flightLength = Number(input[1]);
    let passengers = Number(input[2]);

    let price = 0;
    switch(ticket){
        case("Economy"):{
            if(flightLength < 1500){
                price = 59.99 * passengers
            }else if( flightLength >= 1500 && flightLength <= 3500){
                price = 184.99 * passengers;
            }else{
                price = 269.99 * passengers;
            }
        }break;
        case("Premium"):{
            if(flightLength < 1500){
                price = 179.99 * passengers
            }else if( flightLength >= 1500 && flightLength <= 3500){
                price = 279.99 * passengers;
            }else{
                price = 394.99 * passengers;
            }
        }break;
        case("Business"):{
            if(flightLength < 1500){
                price = 254.99 * passengers
            }else if( flightLength >= 1500 && flightLength <= 3500){
                price = 379.99 * passengers;
            }else{
                price = 619.99 * passengers;
            }
        }break;
    }
    if(passengers > 6){
        price = price - (price * 0.20)
    }
    console.log(`The total price of the tickets is: ${price.toFixed(2)} lv.`);
    
}bookAFlight(["Economy",
  1500,
    7,
    ])