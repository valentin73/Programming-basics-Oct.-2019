function cappyJuice(input) {
    let saveJuices = new Map;
 
 
    for(let juice of input) {
        let splitString = juice.split(' => ');
        let juiceName = splitString[0];
        let quantity = Number(splitString[1]);
 
        if(saveJuices.has(juiceName)) {
            let getValue = saveJuices.get(juiceName);
            saveJuices.delete(juiceName);
            saveJuices.set(juiceName, quantity + getValue);
 
        }
        else {
            saveJuices.set(juiceName, quantity);
        }
 
    }
 
    console.log(saveJuices);
    for(let [k, v] of saveJuices) {
        let divideBottles = Math.floor(v / 1000);
        if(divideBottles >= 1) {
            console.log(`${k} => ${divideBottles}`);
        }
 
    }
 
}
cappyJuice(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);
