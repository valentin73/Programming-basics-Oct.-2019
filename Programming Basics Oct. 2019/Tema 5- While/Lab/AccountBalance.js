function accountBalance(input) {
    let payments = Number(input.shift());

    let counter = 0;
    let balance = 0.0;

    while (counter < payments) {
        let amount = Number(input.shift());
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        
        counter++;
    }
    console.log(`Total: ${balance.toFixed(2)}`);
    
}   accountBalance([3,5.51,69.42,100])