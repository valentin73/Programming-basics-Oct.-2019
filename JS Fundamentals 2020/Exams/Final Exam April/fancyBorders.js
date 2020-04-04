function fancyBorders(strings = []) {
    let barcodesCount = Number(strings.shift());

    function isSurrounded(barcode) {
        let individualElements = barcode.split('');

        let surroundings = [];
        for (let element of individualElements) {
            if (codingElements(element, '#') ||
                codingElements(element, "@")) {
                surroundings.push(element);
            }
        }
        surroundings = surroundings.join('')
        let counter = 0
        while (surroundings.includes('@#')) {
            surroundings = surroundings.replace('@#', '');
            counter++
        }
        if (counter === 2) {
            return true;
        } else {
            return false;
        }

    }
    function word(barcode) {
        let individualElements = barcode.split('');

        let insidePart = [];
        for (let element of individualElements) {
            if (!codingElements(element, '#') &&
                !codingElements(element, "@")) {
                insidePart.push(element);
            }
        }
        insidePart = insidePart.join('')
        return insidePart;
    }
    function codingElements(element, symbol) {
        return element.charCodeAt(0) === symbol.charCodeAt(0)
    }

    function isBetweenRange(symbol, start, end) {
        return symbol.charCodeAt(0) >= start.charCodeAt(0) && symbol.charCodeAt(0) <= end.charCodeAt(0);
    }

    function containsOnlyLettersAndDigits(barcode) {
        let isValid = true;
        for (let symbol of barcode) {
            if (!(isBetweenRange(symbol, "A", "Z") ||
                isBetweenRange(symbol, "a", "z") ||
                isBetweenRange(symbol, "0", "9"))) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    function isAtLeastSixLong(word) {
        return word.length >= 6
    }

    function startsWithCapLetter(word) {
        return isBetweenRange(word[0], "A", "Z")
    }
    function endsWithCapLetter(word) {
        return isBetweenRange(word[word.length - 1], "A", "Z")
    }
    function digits(word) {
        let allDigits = [];
        for (let symbol of word) {
            if (isBetweenRange(symbol, "0", "9")) {
                allDigits.push(symbol)
            }
        }
        allDigits = allDigits.join('')
        return allDigits
    }

    for (let i = 0; i < barcodesCount; i++) {
        let currentBarcode = strings[i];
        currentBarcode = currentBarcode.trim()

        let isSurroundedValue = isSurrounded(currentBarcode);

        let wordValue = word(currentBarcode);

        let isAtLeastSixLongValue = isAtLeastSixLong(wordValue)

        let startsWithCapLetterValue = startsWithCapLetter(wordValue);

        let containsOnlyLettersAndDigitsValue = containsOnlyLettersAndDigits(wordValue)

        let endsWithCapLetterValue = endsWithCapLetter(wordValue);

        if (isSurroundedValue && isAtLeastSixLongValue && startsWithCapLetterValue && containsOnlyLettersAndDigitsValue && endsWithCapLetterValue) {
            let digitsValue = digits(wordValue);
            if(digitsValue.length === 0){
                console.log('Product group: 00');
            }else{
                console.log(`Product group: ${digitsValue}`);
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBorders([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
])