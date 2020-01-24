function freelance(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let taxes = Number(input[index]);

    let monthsCounter = 0;
    let yearsCounter = 0;

    let totalMoney = 0;
    let flag = false;
    while (totalMoney < moneyNeeded) {
        index++;
        monthsCounter++;
        let monthlyIncome = Number(input[index]);
        totalMoney = totalMoney + monthlyIncome - taxes;
        if (totalMoney < 0) {
            
            flag = true;
            break;
        }
        if (monthsCounter >= 12) {
            yearsCounter++;
            monthsCounter = 0;
            
        }
    } if (!flag && totalMoney >= moneyNeeded) {
        console.log("You did it!");
        console.log(`It took you ${yearsCounter} years ${monthsCounter} months`);
    } else {
        console.log("It seems you have bankrupted...");
        console.log(`You have worked ${yearsCounter} years ${monthsCounter} months`);
    }
}
 freelance([
    '10000', '500',  '500',
    '500',   '500', '500',
    '500',   '500'])