function needForSpeed(input = []) {
    let lines = input.slice(0, input.indexOf('Stop'));
    let numOfCars = lines.shift();

    let carsObject = {};

    // Filling Object of Cars
    for (let i = 0; i < numOfCars; i++) {
        let [carName, carMileage, carFuel] = lines.shift().split("|");

        carsObject[carName] =
        {
            carMileage: +carMileage,
            carFuel: +carFuel
        };
    }

    for (const line of lines) {
        let [command, car, arg1, arg2] = line.split(" : ");

        if (command === 'Drive') {
            Drive(car, arg1, arg2);

        } else if (command === 'Refuel') {
            Refuel(car, arg1);

        } else if (command === 'Revert') {
            Revert(car, arg1);

        } 

    }

    function Drive(car, distance, fuel){
        if (carsObject[car].carFuel < fuel) {
            console.log(`Not enough fuel to make that ride`);

        }else {
            carsObject[car].carMileage += Number(distance);
            carsObject[car].carFuel -= fuel;

            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

        }
        if (carsObject[car].carMileage >= 100000) {
            console.log(`Time to sell the ${car}!`);
            delete carsObject[car];
        }
    }

    function Refuel(car, fuel) {
        let amountToRefuel = Number(fuel);

        let carFuel = carsObject[car].carFuel + amountToRefuel;

        if (carFuel > 75) {
            amountToRefuel = fuel - (carFuel - 75);
            carFuel = 75;
        }

        carsObject[car].carFuel = carFuel;

        console.log(`${car} refueled with ${amountToRefuel} liters`);

    }

    function Revert(car, kilometers) {

        let amountToRevert = Number(kilometers);

        carsObject[car].carMileage -= amountToRevert;

        if (carsObject[car].carMileage < 10000) {
            carsObject[car].carMileage = 10000;
        }else {
            console.log(`${car} mileage decreased by ${amountToRevert} kilometers`);            

        }       

    }

    // sort
    let carsAndMileage = [];

    for (const car in carsObject) {
        carsAndMileage.push([car, carsObject[car].carMileage])
    }

    carsAndMileage.sort(function(a, b) {

        return a[0].localeCompare(b[0]);
    });

    carsAndMileage.sort(function(a, b) {
        return b[1] - a[1];     //koenig, lambo, bugati //volks, mercedes, audi
    });


    // print all
    for (const car of carsAndMileage) {
        let name = car[0];

        console.log(`${name} -> Mileage: ${carsObject[name].carMileage} kms, Fuel in the tank: ${carsObject[name].carFuel} lt.`);        

    }
}



needForSpeed([
    // '3',
    // 'Audi A6|38000|62',
    // 'Mercedes CLS|11000|35',
    // 'Volkswagen Passat CC|45678|5',
    // 'Drive : Audi A6 : 543 : 47',
    // 'Drive : Mercedes CLS : 94 : 11',
    // 'Drive : Volkswagen Passat CC : 69 : 8',
    // 'Refuel : Audi A6 : 50',
    // 'Revert : Mercedes CLS : 500',
    // 'Revert : Audi A6 : 30000',
    // 'Stop'

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

])