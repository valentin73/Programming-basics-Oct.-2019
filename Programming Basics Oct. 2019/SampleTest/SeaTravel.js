function seaTravel(input){
    let food = Number(input[0]);
    let souvenirs = Number(input[1]);
    let hotel = Number(input[2]);

    let fuelCost = (420 / 100 *7) *1.85;

    let firstDayHotelPrice = hotel - (hotel * 0.10);
    let secondDayHotelPrice = hotel - (hotel * 0.15);
    let thirdDayHotelPrice = hotel - (hotel * 0.20);

    let totalPrice = ( 3 *(food + souvenirs)) + fuelCost + firstDayHotelPrice + secondDayHotelPrice + thirdDayHotelPrice;

    console.log(`Money needed: ${totalPrice.toFixed(2)}`);
    
}
seaTravel([100,50,500])