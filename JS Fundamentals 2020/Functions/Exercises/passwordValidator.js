function passwordValidator(password) {
    let passwordLength = password.length;

    function lenghtCheck(passwordLength) {
        let lenghtChecker = false;
        if (passwordLength >= 6 && passwordLength <= 10) {
            lenghtChecker = true;
        }
        return lenghtChecker;
    }

    let lengthCheckValue = lenghtCheck(passwordLength);
    if (!lengthCheckValue) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    function symbolBetweenRange(symbol, start, end) {
        return symbol.charCodeAt(0) >= start.charCodeAt(0) && symbol.charCodeAt(0) <= end.charCodeAt(0);
    }
    function symbolsAreLettersAndNumbers(password) {
        let symbolsChecker = false;
        for (symbol of password) {
            if (!(symbolBetweenRange(symbol, 'A', 'Z') ||
                symbolBetweenRange(symbol, 'a', 'z') ||
                symbolBetweenRange(symbol, '0', '9'))) {
                    symbolsChecker = true;
                }
                return symbolsChecker;
        }
    }
    let symbolsAreLettersAndNumbersValue = symbolsAreLettersAndNumbers(password);
    if(symbolsAreLettersAndNumbersValue){
        console.log('Password must consist only of letters and digits');
    }
}
passwordValidator("l!ogin")




















