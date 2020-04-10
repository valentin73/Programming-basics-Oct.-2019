function makeDictionary(input = []){
    let dictionary = {}

    for (const word of input) {
        let converted = JSON.parse(word);
        let entry = Object.entries(converted)
        let currentWord = entry[0];
        let [name, definition] = [currentWord[0], currentWord[1]]
        dictionary[name] = definition;
    }
    
    let sortedTerms = Object.keys(dictionary).sort((a,b) => a.localeCompare(b));
    
    let sortedDictionary = {}
    for (const term  of sortedTerms) {
        sortedDictionary[term] = dictionary[term]
    }   
    for (const term in sortedDictionary) {
        if (sortedDictionary.hasOwnProperty(term)) {
            const definition = sortedDictionary[term];
            console.log(`Term: ${term} => Definition: ${definition}`)
                
        }
    }


}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )

    // for (const key in dictionary) {
    //     console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    //  }