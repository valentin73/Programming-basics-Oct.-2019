function multiplicationTable(input){
    let result = 0;

    for(let i =1; i <=10; i++){
        for(let x = 1; x <=10; x++){
            result = i * x;
            console.log(`${i} * ${x} = ${result}`);
       }

    } 
}
multiplicationTable()