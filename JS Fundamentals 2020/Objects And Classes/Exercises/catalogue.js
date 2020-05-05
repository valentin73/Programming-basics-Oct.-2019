function catalogue(input = []) {
    let products = {};

    for (const line of input) {
        let [product, amount] = line.split(' : ');
        amount = Number(amount);
        products[product] = amount;
    }
    
    function sorting(prod1, prod2){
        return prod1[0].localeCompare(prod2[0])
    }

    let sorted = Object.entries(products).sort((prod1, prod2 ) => sorting(prod1, prod2))
    
    let lockedLetter;
    for (let i = 0; i < sorted.length; i++) {
        let name = sorted[i][0];
        let quantity = sorted[i][1];
        let currentLetter = name[0];

        if(i === 0 || currentLetter !== lockedLetter){
            lockedLetter = currentLetter;
            console.log(lockedLetter);
        }
        console.log(`  ${name}: ${quantity}`);
        
    }
    
} catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);