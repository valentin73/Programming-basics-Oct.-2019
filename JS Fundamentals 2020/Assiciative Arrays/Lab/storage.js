function storage(input){
    let list = new Map();

    input.forEach(element => {
        let [ product, quantity] = element.split(' ');
        quantity = Number(quantity);
        if(list.has(product)){
            quantity += list.get(product)
        }

        list.set(product, quantity);

    });
    for (const [product, quantity] of list) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)