function commonElements(firstArray, secondArray){
    for(let currentElemntFirstArr  of firstArray){
        for(let currentElemntSecondArr of secondArray){
            if(currentElemntFirstArr === currentElemntSecondArr){
                console.log(currentElemntFirstArr);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)