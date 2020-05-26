function piccolo(input = []) {
    let cars = new Set();

    input.forEach(line => {
        let [direction, carNumber] = line.split(', ');
        if (direction === 'IN') {
            cars.add(carNumber);
        } else if (direction === 'OUT') {
            if (cars.has(carNumber)) {
                cars.delete(carNumber);
            }
        }
    })
    let result = Array.from(cars)
        .sort((a, b) => {
            return a.localeCompare(b);
        })

    if (result.length > 0) {
        result.forEach(num => console.log(num))
    } else {
        console.log('Parking Lot is Empty');
    }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA',
    'IN, CB9234TA',
    'IN, CA2234TA',
    'IN, CB1234TA']

)