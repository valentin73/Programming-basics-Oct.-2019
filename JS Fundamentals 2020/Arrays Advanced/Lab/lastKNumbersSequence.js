function lastKNumberSequence(n, k) {
    let resultArray = [1];

    let currentNumber = 0;
    for (let i = 1; i < n ; i++) {
        let start = i - k;
        let end = i + 1;
        if(start < 0){
            start = 0
        }else{
            end = i;
        }
        
        let numbersToAdd = resultArray.slice(start, end );

        for (let number of numbersToAdd) {
            currentNumber += number
        }
        resultArray.push(currentNumber)
        currentNumber = 0;
    }
    console.log(resultArray.join(' '));
}

lastKNumberSequence(6, 3);

function withReduce(n, k){
    let resultArray = [1];

    for(let i = 1; i < n; i++){
        let sliceIndex = Math.max(resultArray.length - k, 0);

        let nextElement = resultArray
        .slice(sliceIndex)
        .reduce(((accumulator, currentValue) => accumulator + currentValue));

        resultArray.push(nextElement);
    }

    console.log(resultArray.join(' '));
}

withReduce(6,3)