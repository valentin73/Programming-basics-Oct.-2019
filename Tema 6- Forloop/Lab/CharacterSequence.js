function characterSequence(input) {
    let text = input.shift();
    let size = text.length;

    for (let i = 0; i < size; i++) {
        let letter = text[i];
        console.log(letter);
    }
}
characterSequence(["SoftUni"])