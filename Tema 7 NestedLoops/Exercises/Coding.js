function coding(input) {
    let number = (input[0]);

    let ascii = 0;
    for (let i = number.length - 1; i >= 0; i--) {
        let currentDigit = Number(number[i]);
        ascii = String.fromCharCode(currentDigit + 33);
        if(currentDigit == 0){
            console.log("ZERO");
        }else{
        console.log(ascii.repeat(currentDigit));
        }

    }
} 
coding(["9204"])