function printEveryNthElement(input = []){
    const step = input.pop();
    input.forEach((x,i) => i % step === 0 ? console.log(x) : 'pass')

}
printEveryNthElement(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)