function equalArrays(firstArray, secondArray){
    for(let i = 0; i < firstArray.length;i++){
        firstArray[i] = Number(firstArray[i]);
    }
    
    for(let k = 0; k < secondArray.length;k++){
        secondArray[k] = Number(secondArray[k]);
    }

    let areEqual = true;
    let sum =0;

    for(let i = 0; i< firstArray.length;i++){
        if(firstArray[i] !== secondArray[i]){
            areEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }else{
            sum += firstArray[i]
        }
    }
    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1','2','3','4','5'], ['1','2','3','4','5'])