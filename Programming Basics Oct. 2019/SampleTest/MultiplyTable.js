function multiplyTable(input){
    let number = Number(input[0]);
    let x1 = Math.floor(number  % 10);
    let x2 = Math.floor(number / 10 % 10);
    let x3 = Math.floor(number / 100 % 10);
   
    let result = 0
    
    for(let a = 1; a <=x1;a++){
        for(let b = 1; b <= x2; b++){
            for(let c = 1; c <= x3; c++){
                result = a * b * c;
                console.log(`${a} * ${b} * ${c} = ${result};`);
                
            }
        }
    }  
}
multiplyTable([324])