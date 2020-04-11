function needForSpeed(input = []) {
    let n = Number(input.shift())
    let cars = {};

    for (let i = 0; i < n; i++) {
        let currentLine = input.shift().split('|')
        let [car, mileage, fuel] = [currentLine[0], Number(currentLine[1]), Number(currentLine[2])]
        cars[car] = { mileage: mileage, fuel: fuel }
    }
    let currentLine = input.shift();


    //functions


    function drive(car, distance, fuel) {
        let fuelDif = cars[car].fuel - fuel;
        if (fuelDif < 0) {
            console.log("Not enough fuel to make that ride");
        } else {
            cars[car].mileage += distance;
            cars[car].fuel -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        }
        if (cars[car].mileage >= 100000) {
            console.log(`Time to sell the ${car}!`);
            delete cars[car]
        }
    }
    function refuel(car, fuel){
        let refilled = cars[car].fuel += fuel;
        if(refilled > 75){
            let diff = (fuel - 75);
            console.log(`${car} refueled with ${diff} liters`);
            cars[car].fuel = 75
        }else{
            console.log(`${car} refueled with ${fuel} liters`);
        }
    }

    function revert(car, kilometers){
        cars[car].mileage -= kilometers;
        if(cars[car].mileage < 10000){
            cars[car].mileage = 10000
        }else{
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }



    while (currentLine !== 'Stop') {
        let fullList = currentLine.split(' : ')
        let command = fullList[0]
        switch (command) {
            case ('Drive'): {
                let car = fullList[1];
                let distance = Number(fullList[2])
                let fuel = Number(fullList[3])
                drive(car, distance, fuel)
                break;
            }
            case ('Refuel'): {
                let car = fullList[1];
                let fuel = Number(fullList[2])
                refuel(car, fuel)
                break;
            }
            case ('Revert'): {
                let car = fullList[1];
                let kilometers = Number(fullList[2])
                revert(car, kilometers)
                break;
            }
        }
        currentLine = input.shift();
    }

     // sort
     let carsAndMileage = [];

     for (const car in cars) {
         carsAndMileage.push([car, cars[car].mileage])
     }
 
     carsAndMileage.sort(function(a, b) {
 
         return b[0].localeCompare(a[0]);
     });
 
     carsAndMileage.sort(function(a, b) {
         return b[1] - a[1];     //koenig, lambo, bugati //volks, mercedes, audi
     });
 
 
     // print all
     for (const car of carsAndMileage) {
         let name = car[0];
 
         console.log(`${name} -> Mileage: ${cars[name].mileage} kms, Fuel in the tank: ${cars[name].fuel} lt.`);        
 
     }


}


needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
//   
])