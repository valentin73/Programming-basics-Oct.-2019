function oddOccurences(sentence){
    let words = sentence.split(' ').map(word => word = word.toLowerCase())
    let occurenceCounter = new Map();
    
    words.forEach(word =>{
        if(!occurenceCounter.has(word)){
            occurenceCounter.set(word, 1)
        }else{
            let counter = occurenceCounter.get(word);
            occurenceCounter.set(word, counter += 1)
        }
    })
    let result = []
    occurenceCounter.forEach((value, key) =>{
       if(value % 2 !== 0){
           result.push(key)
       }
   }) 
   console.log(result.join(' '));

}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')