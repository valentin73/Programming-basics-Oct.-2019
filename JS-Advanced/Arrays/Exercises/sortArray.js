function sortArray(input = []){
    input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    })

    console.log(input.join('\n'));

}
sortArray(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);

sortArray(['alpha', 
'beta', 
'gamma']
)