function districtArray(numbers = []){
    let uniqueNumbers = [];
    for(let i = 0; i < numbers.length;i++){
        if(!uniqueNumbers.includes(numbers[i])){
            uniqueNumbers.push(numbers[i])
        }
    }
    console.log(uniqueNumbers.join(' '));
}
districtArray([7, 8, 9, 7, 2, 3, 4, 1, 2])