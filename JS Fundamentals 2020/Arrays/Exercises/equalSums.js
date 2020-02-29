function equalSums(array = []) {
    let equalFlag = false;
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i]
        let leftArray = array.slice(0, i)
        let rightArray = array.slice(i + 1, array.length);

        let leftArraySum = 0;
        let rightArraySum = 0;
        for (let number1 of leftArray) {
            leftArraySum += number1
        }
        for (let number2 of rightArray) {
            rightArraySum += number2
        }
        if (leftArraySum === rightArraySum) {
            console.log(i);
            equalFlag = true
        }
    }
    if (equalFlag === false) {
        console.log("no");
    } 
}
equalSums([1,])