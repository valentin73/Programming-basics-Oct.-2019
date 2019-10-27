function fruidOrVegetable(input) {
    let product = input.shift();

    if (product === "banana" || product === "apple" || product === " kiwi" || product === "cherry" || product === "lemon" || product === "grapes") {
        console.log("fruit");
    } else if (product === "tomato" || product === "cucumber" || product === "papper" || product === " carrot") {
        console.log("vegetable");

    } else {
        console.log("unknown");

    }
}

fruidOrVegetable(["cherry"]);