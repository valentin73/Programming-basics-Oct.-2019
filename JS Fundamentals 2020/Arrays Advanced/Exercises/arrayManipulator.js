function arrayManipulator(numbers = [], commands = []) {

    function add(numbers, commands) {
        let index = Number(commands[1]);
        let element = Number(commands[2]);
        numbers.splice(index, 0, element);
        return numbers;
    }

    function addMany(numbers, commands) {
        let index = Number(commands[1]);
        let element = commands.slice(2).map(Number);
        numbers.splice(index, 0, ...element);
        return numbers;
    }

    function contains(numbers = [], commands) {
        let element = Number(commands[1]);
        let index = numbers.indexOf(element)
        return index
    }

    function remove(numbers = [], commands) {
        let index = Number(commands[1]);
        numbers.splice(index, 1);
        return numbers;
    }

    function shift(numbers = [], commands) {
        let rotations = Number(commands[1]);
        for (let i = 0; i < rotations; i++) {
            let shiftedNumber = numbers.shift();
            numbers.push(shiftedNumber);
        }
        return numbers
    }

    function sumPairs(numbers = [], commands) {
        let resultArray = [];
        let j = 1
        for (let i = 0; i < numbers.length; i += 2) {
            let evenPos = numbers[i];
            let oddPos = numbers[j];
            j += 2
            if (oddPos !== undefined) {
                resultArray.push(evenPos + oddPos)
            } else {
                resultArray.push(evenPos)
            }
        }
        return resultArray;
    }

    let output;
    for (let i = 0; i < commands.length; i++) {
        let fullString = commands[i].split(' ');
        let order = fullString[0];
        let stop = false;

        switch (order) {
            case ('add'): {
                numbers = add(numbers, fullString);
                break;
            }
            case ('addMany'): {
                numbers = addMany(numbers, fullString);
                break;
            }
            case ('contains'): {
                let containsValue = contains(numbers, fullString);
                console.log(containsValue);
                break;
            }
            case ('remove'): {
                numbers = remove(numbers, fullString);
                break;
            }
            case ('shift'): {
                numbers = shift(numbers, fullString);
                break;
            }
            case ('sumPairs'): {
                numbers = sumPairs(numbers, fullString);
                break;
            }
            case ('print'): {
                stop = true;
                break;
            }
        }

        if (stop) {
            break;
        }
    
    }

    console.log(numbers);
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"]
)