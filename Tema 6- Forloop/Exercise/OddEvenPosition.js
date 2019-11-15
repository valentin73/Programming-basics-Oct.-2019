function oddEvenPosition(input) {
    let n = Number(input[0]);
    let min = Number.MAX_SAFE_INTEGER   
    let max = Number.MIN_SAFE_INTEGER

    let oddSum = 0;
    let oddMin = 0;
    let oddMax = 0;

    let evenSum = 0;
    let evenMin = 0;
    let evenMax = 0;

    for(let i = 1; i < n ; i=i+2){
        let data = input[i];
        if(data > min ){
            data = oddMin;
        }
        if(data < max){
            data = oddMax;
        }
        oddSum += data;
        console.log(`OddSum = ${oddSum.toFixed(2)},`); 
        console.log(`OddMin = ${oddMin.toFixed(2)},`);
        console.log(`OddMax = ${oddMax.toFixed(2)},`);
        
        

    }
} 
