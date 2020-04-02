function arrayManipulations(array = []){
    let currentArray = array[0].split(' ').map(Number);
    
    for (let i = 1; i < array.length; i++) {
        let fullCommand = array[i].split(' ')
        let instruction = fullCommand[0];
        let number = fullCommand.map(Number)[1];
        
        switch(instruction){
            case('Add'):{
                currentArray.push(number);
                break;
            }
            case('Remove'):{
                currentArray = currentArray.filter(x => x !== number)
                break;
            }
            case('RemoveAt'):{
                currentArray.splice(number,1)
                break;
            }
            case('Insert'):{
                index = fullCommand[2];
                currentArray.splice(index, 0 , number)
                break;
            }
        }
    }
    console.log(currentArray.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);