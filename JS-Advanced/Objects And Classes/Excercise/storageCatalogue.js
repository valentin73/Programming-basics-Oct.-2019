function storageCatalogue(input = []) {
    const catalogue = {};

    input.forEach(el => {
        let [name, price] = el.split(' : ');
        price = Number(price);
        const letter = name[0];
        if (catalogue.hasOwnProperty(letter) === false) {
            catalogue[letter] = {};
        }
        catalogue[letter][name] = price;
    })

    const sortedKeys =  Object.keys(catalogue).sort((a,b) => a.localeCompare(b));

    sortedKeys.forEach(key =>{
        console.log(key);
        const sortedItems = Object.keys(catalogue[key]).sort((a,b) => a.localeCompare(b));
        sortedItems.forEach(item => console.log(`  ${item}: ${catalogue[key][item]}`))
        
    })

}
storageCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)