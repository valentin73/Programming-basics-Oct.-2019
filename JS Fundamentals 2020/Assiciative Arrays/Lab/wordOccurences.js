function wordOccurences(text = []) {
    let map = new Map();

    for (const word of text) {
        let count = 1
        if (map.has(word)) {
            count += map.get(word)
        }
        map.set(word, count)
    }

    let sorted = Array.from(map).sort((a,b) => b[1] - a[1])
    
    let result = new Map(sorted)

    for (const [word, amount] of result) {
        console.log(`${word} -> ${amount} times`);
    }

}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])