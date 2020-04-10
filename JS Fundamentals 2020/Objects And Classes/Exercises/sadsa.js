let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90};

let combine = Object.assign(productOne, productTwo);
console.log(combine);