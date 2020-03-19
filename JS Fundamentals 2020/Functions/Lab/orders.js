function orders(product, amount) {
    let totalPrice = (a, b) => a * b

    switch (product) {
        case ('coffee'): {
            productPrice = 1.5;
            return totalPrice(productPrice, amount).toFixed(2)
        }
        case ('water'): {
            productPrice = 1;
            return totalPrice(productPrice, amount).toFixed(2)
        }
        case ('coke'): {
            productPrice = 1.4;
            return totalPrice(productPrice, amount).toFixed(2)
        }
        case ('snacks'): {
            productPrice = 2;
            return totalPrice(productPrice, amount).toFixed(2)
        }
    }

}
console.log(orders('snacks', 5));