function productOfThree(arr) {
    let X = Number(arr[0]);

    let negativeCounter = 0;
    let isZero = false;
    for (let i = 1; i <= arr.length; i++) {
        if (X < 0) {
            negativeCounter++
        } else if (X == 0) {
            isZero = true;
            console.log("Positive");
            break;
        }
        X = Number(arr[i])
    }
    if (!isZero) {
        if (negativeCounter % 2 == 0) {
            console.log("Positive")
        } else {
            console.log("Negative");

        }
    }
} productOfThree([1, -1, -2])