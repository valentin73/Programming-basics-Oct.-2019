function graduation2(input) {
    let name = input.shift();

    let counter = 1;
    let gradeSum = 0;

    let badGradeCounter = 0;
    let flag = false;
    while (counter <= 12) {
        let grade = Number(input.shift());

        if (grade < 4) {
            badGradeCounter++;
            if (badGradeCounter == 2) {
                console.log(`${name} has been excluded at ${counter} grade`);
                flag = true;
                break;
            }
        } else {
            gradeSum += grade;
            counter++;
        }
    }
    if(!flag){
    let averageSum = gradeSum / 12;
    console.log(`${name} graduated. Average grade: ${averageSum.toFixed(2)}`)
    }
}

graduation2(["Pesho",   4,  5.5,  6,  5.43,  4.5,  6,  5.55,  5,  6,  6, 5.43,5, 6,])
graduation2(["Mimi", 5, 6, 5, 6, 5, 6, 6, 2, 3,])