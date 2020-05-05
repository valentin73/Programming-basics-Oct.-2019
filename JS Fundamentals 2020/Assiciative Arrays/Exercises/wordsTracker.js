function wordsTracker(input = []){
    let searchedWords = input.shift().split(' ');
    let map = new Map();

    searchedWords.forEach(element => {
        map.set(element, 0);
    });
    
    input.forEach(word => {
        if(searchedWords.includes(word)){
            let currentOccurences = map.get(word);
            // let newOccurences = currentOccurences + 1
            // map.set(word, newOccurences)
            map.set(word, currentOccurences +=1)
        }
    })

    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]).forEach(pair => console.log(`${pair[0]} - ${pair[1]}`))

}
wordsTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )