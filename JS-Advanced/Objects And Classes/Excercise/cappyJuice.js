function cappyJuice(input = []) {
    const bottles = new Map;
    const lessThan1000 = new Map;

    for (const line of input) {
        let [name, quantity] = line.split(' => ');
        quantity = Number(quantity)
        if (quantity >= 1000) {
            if (bottles.has(name)) {
                let value = bottles.get(name)
                bottles.set(name, quantity + value)
            } else {
                bottles.set(name, quantity);
            }
        } else {
            if (lessThan1000.has(name)) {
                let value = lessThan1000.get(name)
                lessThan1000.set(name, quantity + value)
            } else {
                lessThan1000.set(name, quantity);
            }
        }
        if (lessThan1000.get(name) >= 1000) {
            if (bottles.has(name)) {
                let value = bottles.get(name)
                bottles.set(name, quantity + value)
                
            } else {
                bottles.set(name, quantity);
            }
        }

    }
    for (const [name, value] of lessThan1000) {
        if (bottles.has(name)) {
            let getValue = bottles.get(name)
            bottles.set(name, value + getValue)
        } else {
            bottles.set(name, value)
        }
    }

    for (let [key, value] of bottles) {
        let fullBottles = Math.floor(value / 1000);
        if (fullBottles >= 1) {
            console.log(`${key} => ${fullBottles}`);
        }
    }

}
// cappyJuice(['Kiwi => 234',
// 'Pear => 2345',
// 'Watermelon => 3456',
// 'Kiwi => 4567',
// 'Pear => 5678',
// 'Watermelon => 6789']

// )
cappyJuice(['Orange => 2000',
    'Peach => 1400',
    'Strawberry => 549',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549',
    'Strawberry => 549',
    'Strawberry => 549',]
)