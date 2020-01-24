function halfSum(input) {
    let n = Number(input[0]);

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let smallSum = 0;
    let diff = 0;
    for (let i = 1; i <= n;i++){
        let number = Number(input[i]);

        if(number > maxNumber){
            maxNumber = number;
        }
        sum += number;
    }
    smallSum = sum - maxNumber
    if(smallSum == maxNumber){
        console.log("Yes");
        console.log(`Sum = ${smallSum}`);
    }else{
        diff = maxNumber - smallSum;
        console.log("No");
        console.log(`Diff = ${Math.abs(diff)}`);
    
    }
}
halfSum([3, 1, 1, 10])