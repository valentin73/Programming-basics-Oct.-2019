function storeProvision(stock = [], deliveries = []) {
    let finalStock = []
    let missingItems = []
    for (let i = 0; i < stock.length; i += 2) {
        let [currentProduct, quantity] = [stock[i], Number(stock[i + 1])];
        let obj = { name: currentProduct, quantity: quantity }
        finalStock.push(obj)
    }

    for (let i = 0; i < deliveries.length; i += 2) {
        let [currentProduct, quantity] = [deliveries[i], Number(deliveries[i + 1])];

        for (let i = 0; i < finalStock.length; i++) {
            let iterator = finalStock[i]
            if (iterator.name === currentProduct) {
                iterator.quantity += quantity;
                break;
            }else if(i === finalStock.length - 1 && iterator.name !== currentProduct){
                missingItems.push({name: currentProduct, quantity:quantity})
            }
        }

    }
    finalStock = finalStock.concat(missingItems);
   
    for (const iterator of finalStock) {
        console.log(`${iterator.name} -> ${iterator.quantity}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])