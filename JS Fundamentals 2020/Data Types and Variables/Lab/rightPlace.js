function rightPlace(string, symbol, result){
    let res = string.replace('_',symbol);
    let output = res === result
    ? 'Matched' : 'Not Matched';
    console.log(output);
}