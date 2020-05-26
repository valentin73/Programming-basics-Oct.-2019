function sameNumber(number){
    let isSame = true;
    let sum = 0;
    let digit = number % 10
    while(number){
        let currentDigit = number % 10;
        if(!(currentDigit === digit)){
            isSame = false;
        }
        sum += currentDigit;
        number = parseInt(number / 10);
    }

    console.log(isSame);
    console.log(sum);
}
sameNumber(22221)