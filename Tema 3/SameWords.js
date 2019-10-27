function sameWords(input) {
    let word1 = input.shift();
    let word2 = input.shift();

    if (word1.toUpperCase() === word2.toUpperCase()) {
        console.log("yes");

    } else {
        console.log("no");

    }
}
sameWords(["aLEx", "alex"])