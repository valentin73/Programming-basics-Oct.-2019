function rotateArray(array = []) {
    let rotations = Number(array[array.length - 1]);
    array.pop(rotations);
    for(let i = 0; i < rotations ; i++){
        let curremtElement = array.pop();
        array.unshift(curremtElement)
    }
    console.log(array.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);