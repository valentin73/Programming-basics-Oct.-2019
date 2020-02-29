function arraysRotation(array, rotations) {
    for (let i = 0; i < rotations; i++) {
       let currentFirstNumber = array.shift();
       array.push(currentFirstNumber)
    }
    console.log(array.join(' '));
}
arraysRotation([51, 47, 32, 61, 21], 3)