function shoppingList(arrayOfCommands = []) {
    let initialList = []
    initialList = arrayOfCommands[0].split('!');
    let resultList = initialList;
    let currentCommand = '';
    while (currentCommand !== 'Go Shopping!') {
        for (let i = 1; i < arrayOfCommands.length; i++) {
            currentCommand = arrayOfCommands[i];
            let splittedCommand = currentCommand.split(' ')
            let commandType = splittedCommand[0];
            let product = splittedCommand[1]
            switch (commandType) {
                case ('Urgent'): {
                    if (!(initialList.includes(product))) {
                        resultList.unshift(product)
                    }
                } break;
                case ('Unnecessary'): {
                    if (initialList.includes(product)) {
                        let index = resultList.indexOf(product);
                        resultList.splice(index, 1)
                    }
                } break;
                case ('Correct'): {
                    let correctName = splittedCommand[2];
                    if (initialList.includes(product)) {
                        product.replace(product, correctName)
                        let index = resultList.indexOf(product);
                        resultList[index] = correctName;
                    }
                } break;
                case ('Rearrange'): {
                    if (initialList.includes(product)) {
                        let index = resultList.indexOf(product);
                        resultList.splice(index, 1)
                        resultList.push(product)

                    }
                } break;
            }
        }
        console.log(resultList.join(', '));
    }


}

shoppingList([
    'Milk!Pepper!Water!Banana',
    'Urgent Salt',
    'Unnecessary Water ',
    'Correct Pepper Prepare',
    'Rearrange Prepare',
    'Correct Tomatoes Potatoes',
    'Go Shopping!',
]);