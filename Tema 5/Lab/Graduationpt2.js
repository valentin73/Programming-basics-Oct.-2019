function graduation2(input) {
    let name = input.shift();

    let counter = 1;
    let gradeSum = 0;

    let badGradeCounter = 0;
    while (counter <= 12) {
        let grade = Number(input.shift());
        if (grade < 4) {
            badGradeCounter++;
            if (badGradeCounter === 2) {
                console.log(`${name} has been excluded at ${counter} grade`);
                break;

            } else {
                gradeSum += grade;
                counter++;
                let avarageSum = gradeSum / 12;
                console.log(`${name} graduated. Avarage grade: ${avarageSum.toFixed(2)}`)
            }
        }
        
    }
}