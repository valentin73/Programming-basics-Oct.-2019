function reverseAnArrayOfNumber(number, inputArr){
    let newArray =[];
    for(let i = 0; i < number;i++){
        newArray += `${inputArr[number - 1 - i]} `
    }
    console.log(newArray);
}
reverseAnArrayOfNumber(3, [10, 20, 30, 40, 50]);