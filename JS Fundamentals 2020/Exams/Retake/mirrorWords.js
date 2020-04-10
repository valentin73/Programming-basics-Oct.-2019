function mirrorWords(words = []) {
    let text = words.shift()
    let pattern = /(?<g1>[@#])(?<content1>[a-zA-Z]{3,})\k<g1>(\k<g1>)(?<content2>[a-zA-Z]{3,})\k<g1>/g;
    let pairs = pattern.exec(text)
    let firstWords = [];
    let secondWords = [];
    while (pairs) {
        firstWords.push(pairs.groups.content1);
        secondWords.push(pairs.groups.content2);
        pairs = pattern.exec(text);
    }
    let secondWordsReversed = [];
    for (let iterator of secondWords) {
        iterator = iterator
            .split('')
            .reverse()
            .join('')
        secondWordsReversed.push(iterator);
    }

    let matchingWords = {}
    for (let i = 0; i < firstWords.length; i++) {
        let firstWord = firstWords[i];
        let secondWord = secondWords[i];
        let secondWordReversed = secondWordsReversed[i];
        if(firstWord === secondWordReversed){
            matchingWords[firstWord] = secondWord;
        }
        
    }
    let output = [];
    for (const key in matchingWords) {
        let currentString = `${key} <=> ${matchingWords[key]}`;
        output.push(currentString);
    }

    if(firstWords.length > 0){
        console.log(`${firstWords.length} word pairs found!`);
        if((Object.keys(matchingWords).length) > 0){
        console.log('The mirror words are:');
        console.log(output.join(', '));
        }else{
            console.log("No mirror words!");
        }
    }else{
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }
}



mirrorWords([
   '@pool##loop@'
])