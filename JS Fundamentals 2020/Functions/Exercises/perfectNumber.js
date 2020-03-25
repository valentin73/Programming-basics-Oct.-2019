function perfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            if (number / i == i) {
                sum = sum + i;
            } else {
                sum = sum + i;
                sum = sum + (number / i);
            }
        }
    }
     console.log(sum - number === number ? "We have a perfect number!" : "It's not so perfect.");
}
perfectNumber(2)
