function passwordValidator(password) {
    function lengthChecker(password) {
        let isValid = true;

        if (password < 6 || password > 10) {
            isValid = false;
        }

        return isValid;
    }
    
    function isBetweenRange(symbol, start, end) {
        return symbol.charCodeAt(0) >= start.charCodeAt(0) && symbol.charCodeAt(0) <= end.charCodeAt(0);
    }
    
    function containsOnlyLettersAndDigits(password) {
        let isValid = true;
        for (let symbol of password) {
            if (!(isBetweenRange(symbol, "A", "Z") ||
            isBetweenRange(symbol, "a", "z") ||
            isBetweenRange(symbol, "0", "9"))) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    function containsAtLeastTwoDigits(password){
        let digitsCounter = 0;
        for(let symbol of password){
            
            if(isBetweenRange(symbol, "0", "9")){
                digitsCounter++;
                if(digitsCounter >= 2 ){
                    break;
                }
            }
        }
        return digitsCounter === 2 ? true : false;
    }

    let lengthCheckerValue = lengthChecker(password.length);
    if (lengthCheckerValue === false) {
        console.log("Password must be between 6 and 10 characters");
    }

    let containsOnlyLettersAndDigitsValue = containsOnlyLettersAndDigits(password);
    if(containsOnlyLettersAndDigitsValue === false) {
        console.log("Password must consist only of letters and digits");
    }

    let containsAtLeastTwoDigitsValue = containsAtLeastTwoDigits(password);
    if(!containsAtLeastTwoDigitsValue ){
        console.log("Password must have at least 2 digits");
    }

    if(lengthCheckerValue && containsOnlyLettersAndDigitsValue && containsAtLeastTwoDigitsValue){
        console.log("Password is valid");
    }
}
passwordValidator("log2!sssgin");




















