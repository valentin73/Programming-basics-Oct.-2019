function vowelsSum(input) {
    let text = input.shift();
    let size = text.length;
    let sum = 0;

    for (let i = 0; i < size; i++) {
        let currecntLetter = text[i];
        switch (currecntLetter) {
            case ("a"): {
                sum += 1
            } break;
            case ("e"): {
                sum += 2
            } break;
            case ("i"): {
                sum += 3
            } break;
            case ("o"): {
                sum += 4
            } break;
            case ("u"): {
                sum += 5
            } break;
        }
    }
    console.log(sum);

} vowelsSum(["hi"])