function magicSum(array = [], sum) {
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        for (let j = i + 1; j < array.length; j++){
            let allOtherNumbers = array[j];
            if(currentNumber + allOtherNumbers === sum){
                console.log(`${currentNumber} ${allOtherNumbers}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8
    )