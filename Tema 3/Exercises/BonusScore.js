function bonusScore(input) {
    let number = Number(input.shift());
    let bonus = 0;
    let fullNumber = number + bonus;
    if (number <= 100) {
        bonus = 5;

    } else if (number > 100 && number < 1000) {
        bonus = number * 0.20;
      
    } else if (number > 1000) {
        bonus = number * 0.10;
    }

    if (number % 2 === 0) {
        bonus += 1;
    } else if (number % 5 === 0) {
        bonus += 2;
    }
    fullNumber = number + bonus;
    console.log(bonus);
    console.log(fullNumber);

}bonusScore([20])