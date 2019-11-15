function latinLetters(input) {
    let name = input.shift();


    for (let i = 0; i < name.length; i++) {
        let ascii = name.charCodeAt[i]
        ascii += 1;
    }
}
latinLetters(["Pesho"])

