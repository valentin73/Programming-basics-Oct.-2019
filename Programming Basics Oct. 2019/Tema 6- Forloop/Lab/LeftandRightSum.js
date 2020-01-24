function leftAndRight(input) {
    let amount = Number(input[0]);
    let m =2 * amount;
    let leftSum = 0;
    let rightSum = 0;
    
    for (let i = 1; i <= amount; i++) {
        let number = Number(input[i])

        leftSum +=number;
    }
    for (let i = m; i < 2*amount; i++) {
        let number = Number(input[m])
        m++;
        rightSum +=number;
    }
    if(leftSum == rightSum){
        console.log(`Yes, sum = ${leftSum}`);
        
    }else {
        let diff = Math.abs(leftSum - rightSum);
        console.log(`No, diff = ${diff}`);
        
    }
    

}

leftAndRight([2,
    10,
    90,
    60,
    40,])