function addAndRemove(array = []) {
    let initialValue = 0;
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i];
        initialValue += 1;
        if (currentCommand === 'add') {
            resultArray.push(initialValue);
        } else {
            resultArray.pop(initialValue);
        }
    }
    if (resultArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultArray.join(' '));
    }
}
addAndRemove(['remove', 'remove', 'remove'])