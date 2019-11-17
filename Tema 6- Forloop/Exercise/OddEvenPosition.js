function oddEvenPosition(input) {
    let n = Number(input[0]);

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let oddFlag = false;

    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let evenFlag = false;
    for (let i = 1; i <= n; i = i + 2) {
        let data = Number(input[i]);

        if (data < oddMin) {
            oddMin = data
        }
        if (data > oddMax) {
            oddMax = data
        }
        oddSum += data;
        
         oddFlag = true
        
    }
    if (oddFlag) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    } else {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    }
    for (let i = 2; i <= n; i = i + 2) {
        let data = Number(input[i]);
        if (data < evenMin) {
            evenMin = data
        }
        if (data > evenMax) {
            evenMax = data
        }
        evenSum += data;
    
         evenFlag = true
        
    }
    if(evenFlag){
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin.toFixed(2)},`);
    console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }else{
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }
}
oddEvenPosition([ '5', '3', '-2', '8', '11', '-3' ])