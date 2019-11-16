function sumNumbers(input){
    let amount = Number(input[0]);
    let sum =0;
    let elements = 1; 
    for(let i = 0; i < amount; i++){
        let number = Number(input[elements]);
        elements++;

        sum +=number;
    }
    console.log(sum);
    
}   
sumNumbers([4, 45,-20, 7, 11])