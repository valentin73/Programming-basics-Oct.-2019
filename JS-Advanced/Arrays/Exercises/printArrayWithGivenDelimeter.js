function printArrayWithGivenDelimeter(input = []){
    const delimeter = input.pop()
    console.log(input.join(delimeter));


}
printArrayWithGivenDelimeter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)