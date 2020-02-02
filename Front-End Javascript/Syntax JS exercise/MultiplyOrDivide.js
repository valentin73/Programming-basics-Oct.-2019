function multiplyOrDivide(arr){
    let numberN = Number(arr[0]);
    let numberX = Number(arr[1]);

    if(numberN <= numberX ){
        return numberN * numberX
    }else{
        return numberN / numberX
    }
    
}
console.log(multiplyOrDivide([13,13]));
