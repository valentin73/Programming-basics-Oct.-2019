function reversedChars(firstChar, secondChar, thirdChar){
    let result = `${firstChar} ${secondChar} ${thirdChar}`.split("").reverse().join("");
    console.log(result);
}
reversedChars("A","B","C")