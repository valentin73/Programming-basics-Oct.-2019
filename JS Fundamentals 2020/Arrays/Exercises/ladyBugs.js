function ladyBugs(array = []) {
    let field = [];
    field.length = array[0];
    let initialBugsIndexes = array[1].split(' ').map(x => Number(x));
    for (let i = 0; i < field.length; i++) {
        if (initialBugsIndexes.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }
    for (let i = 2; i < array.length; i++) {
        let currentCommand = array[i];
        let ladyBugIndex = Number(currentCommand.split(' ')[0]);
        let direction = currentCommand.split(' ')[1];
        let flyLength = Number(currentCommand.split(' ')[2]);

        let newIndex;
        if (direction === 'right') {
            newIndex = ladyBugIndex + flyLength;
            if (field[ladyBugIndex] === 1) {
                if (newIndex < field.length && newIndex >= 0) {
                    if (field[newIndex] === 0) {
                        field[newIndex] = 1;
                        field[ladyBugIndex] = 0;
                    } else if (newIndex === ladyBugIndex) {
                        field[newIndex] = 1;
                    } else {
                        while (field[newIndex] !== 0) {
                            newIndex += flyLength
                            if (newIndex >= field.length || newIndex < 0) {
                                break;
                            }
                            if (field[newIndex] === 0) {
                                field[newIndex] = 1;
                                break;
                            }
                        }
                        field[ladyBugIndex] = 0;
                    }
                } else {
                    field[ladyBugIndex] = 0;
                }
            }
        } else if (direction === 'left') {
            newIndex = ladyBugIndex - flyLength;
            if (field[ladyBugIndex] === 1) {
                if (newIndex < field.length && newIndex >= 0) {
                    if (field[newIndex] === 0) {
                        field[newIndex] = 1;
                        field[ladyBugIndex] = 0;
                    } else if (newIndex === ladyBugIndex) {
                        field[newIndex] = 1;
                    } else {
                        while (field[newIndex] !== 0) {
                            newIndex -= flyLength
                            if (newIndex >= field.length || newIndex < 0) {
                                break;
                            }
                            field[newIndex] = 1;
                        }
                        field[ladyBugIndex] = 0;
                    }
                } else {
                    field[ladyBugIndex] = 0;
                }
            }
        }
    }
    console.log(field.join(' '));
}
ladyBugs([3, '0 1 2',
    '0 right 0',
    '1 left 1',
    '2 left 2']
);

