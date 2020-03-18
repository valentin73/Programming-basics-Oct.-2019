function nonDecreasingSubsequence(array = []) {
    let highestNumber = Number.MIN_SAFE_INTEGER;
    let resultArray = array
        .map(Number)
        .filter(num => {
            if (num > highestNumber) {
                highestNumber = num;
                return true;
            } else {
                return false;
            }
        });
    console.log(resultArray.join(' '));
}
nonDecreasingSubsequence([1,2,2,3,2,3,4,5,2]);