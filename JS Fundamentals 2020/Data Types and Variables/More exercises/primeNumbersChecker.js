function primeNumberChecker(number) {
    let isPrime = true;
    let dividedNumber = 0;
    for (let divider = 1; divider <= number; divider++) {
        dividedNumber = number % divider;
        if (divider !== number && divider !== 1 && dividedNumber === 0) {
            isPrime = false;
        }
    }
    console.log(isPrime);
}
primeNumberChecker(10)