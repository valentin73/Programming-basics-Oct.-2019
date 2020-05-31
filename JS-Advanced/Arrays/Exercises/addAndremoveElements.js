function addAndRemoveElements(input = []){
    let initial = 1;
    let resultArr = [];

    const operations = {
        'add' : x => resultArr.push(x),
        'remove': x=> resultArr.pop()
    }

    input.forEach( line =>{
        operations[line](initial)
        initial++    
    })

   resultArr.length >= 1? console.log(resultArr.join('\n')) : console.log('Empty');
}
addAndRemoveElements([ 
'remove', 
]
);