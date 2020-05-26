function cookingByNumbers(input = []) {
    let number = Number(input.shift());

    const operations = {
        chop: (a) => a / 2,
        dice: (a) => Math.sqrt(a),
        spice: (a) => ++a,
        bake: (a) => a *3,
        fillet:(a) => a*=0.8
    }

    // for (const operation of input) {
    //     let output = operations[operation](number)
    //     console.log(output);
    //     number = output;
    // }
    input.forEach(function(operation){
        let output = operations[operation](number)
        console.log(output);
        number = output;
    });
    
}
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])