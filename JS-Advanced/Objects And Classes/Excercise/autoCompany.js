function autoCompany(input = []) {
    const cars = {}

    input.forEach(element => {
        let [brand, model, amount] = element.split(' | ');
        amount = Number(amount);

        if (cars.hasOwnProperty(brand) === false) {
            cars[brand] = {}
        }
        if (cars[brand].hasOwnProperty(model) === false) {
            cars[brand][model] = amount;
        } else {
            cars[brand][model] += amount;
        }
    });

    const carsKeys = Object.keys(cars);

    carsKeys.forEach(currCar => {
        console.log(currCar);
        const modelsKeys = Object.keys(cars[currCar]);

        modelsKeys.forEach(currModel => {
            console.log(`###${currModel} -> ${cars[currCar][currModel]}`);
        })
    })
}

autoCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)