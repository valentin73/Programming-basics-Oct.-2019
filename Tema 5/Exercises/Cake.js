function cake(input) {
    let lenght = Number(input.shift());
    let width = Number(input.shift());

    let cakeArea = lenght * width;

    while (cakeArea > 0) {
        let inputData = input.shift();
        if (inputData === "STOP") {
            break;
        }
        let cakePieces = Number(inputData);
        cakeArea -= cakePieces;
    }
    if (cakeArea < 0) {
        console.log(`No more cake left! You need ${Math.abs(cakeArea)} pieces more.`)

    } else {
        console.log(`${cakeArea} pieces are left.`);

    }
}cake([10,2,2,4,6,"STOP"])