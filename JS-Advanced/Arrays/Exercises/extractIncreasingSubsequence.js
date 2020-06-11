function extractSubsequence(input =[]){
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    const res = input.reduce((acc, curr) =>{
        if(curr >= currentBiggest){
            acc.push(curr)
            currentBiggest = curr
        }
        return acc
    },[])
    console.log(res.join('\n'));
}

extractSubsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )