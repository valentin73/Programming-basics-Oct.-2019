function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice){
    let helmetsTotalMoney = parseInt(lostFights / 2) * helmetPrice;
    let swordsTotalMoney = parseInt(lostFights / 3) * swordPrice;
    let shieldsTotalMoney = parseInt(lostFights / 6) * shieldPrice;
    let armourTotalMoney = parseInt(lostFights / 12) * armourPrice;

    let totalExpenses = helmetsTotalMoney + swordsTotalMoney + shieldsTotalMoney + armourTotalMoney;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23,12.50,21.50,40,200)