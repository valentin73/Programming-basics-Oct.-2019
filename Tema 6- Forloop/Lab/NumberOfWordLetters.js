function latinLetters(input) {
    let name = input.shift();
    let size = name.length;
    console.log();


    for (let i = 0; i < size; i++) {
        let ascii = name.charCodeAt(i)
        console.log(ascii)
    }
}
latinLetters(["Pesho"])

