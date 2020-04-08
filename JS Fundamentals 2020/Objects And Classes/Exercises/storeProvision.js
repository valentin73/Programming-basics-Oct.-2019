function storeProvision(stock = [], deliveries = []) {
    let finalStock = {}

    for (let i= 0; i < stock.length; i += 2) {
        let [currentProduct, quantity] = [stock[i], Number(stock[i+ 1])];
        finalStock[currentProduct] = quantity;
    }
   
    for (let i= 0; i < deliveries.length; i += 2) {
        let [currentProduct, quantity] = [deliveries[i], Number(deliveries[i+ 1])];
        
        if(finalStock.hasOwnProperty(currentProduct)){
            finalStock[currentProduct] += quantity 
        }else{
            finalStock[currentProduct] = quantity
        }
    }
    
    for (const key in finalStock) {
        console.log(`${key} -> ${finalStock[key]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])