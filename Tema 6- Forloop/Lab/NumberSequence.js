function numberSequence(input) {
    let amount = Number(input[0]);
    let n = 1;
    let min = Number.MAX_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < amount; i++) {
        let number = Number(input[n]);
        n++;

        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
    }
    console.log(`Max number: ${max}`);
    console.log(`Min number: ${min}`);


} numberSequence([8,7,17,25,33,40,67,-500,98])