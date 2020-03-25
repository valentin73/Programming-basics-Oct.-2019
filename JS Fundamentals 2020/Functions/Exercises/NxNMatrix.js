function nxnMatrix(number){
    let oneRowResult = x => `${x} `.repeat(x)
    let fullResult = x => {
        for(let i = 0; i < x; i++){
            console.log(oneRowResult(number));
        }
    }
    fullResult(number);
}
nxnMatrix(4);