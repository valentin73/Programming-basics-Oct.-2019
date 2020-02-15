function charactersInRange(char1, char2) {
    let rangeStart = char1.charCodeAt(0);
    let rangeEnd = char2.charCodeAt(0);
    let output = "";
    if (rangeStart <= rangeEnd) {
        for (let i = rangeStart + 1; i < rangeEnd; i++) {
            output += `${String.fromCharCode(i)} `
        }
    }else if(rangeStart > rangeEnd){
        for (let i = rangeEnd + 1; i < rangeStart ; i++) {
            output += `${String.fromCharCode(i)} `
        }
    }
    console.log(output);
}
charactersInRange("a", "d")