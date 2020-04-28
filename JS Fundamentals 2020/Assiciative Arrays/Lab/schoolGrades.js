function schoolGrades(input) {

    function sorting(a, b) {
        let firstAvgGrade = a[1].reduce((acc, c) => {
            acc += c;
            return acc
        }) / a[1].length;
        let secondAvgGrade = b[1].reduce((acc2, d) => {
            acc2 += d;
            return acc2
        }) / b[1].length;

        return firstAvgGrade - secondAvgGrade
    };
    
    let students = new Map();

    for (const line of input) {
        let [currStudent, ...grades] = line.split(' ');
        grades = grades.map(Number)
        if (students.has(currStudent)) {
            grades = students.get(currStudent).concat(grades);
        }
        
        students.set(currStudent, grades);
    }

    let sorted = Array.from(students.entries()).sort((a, b) => sorting(a, b))

    let result = new Map(sorted);

    for (const [student, grades] of result) {
        console.log(`${student}: ${grades.join(', ')}`);
    }

}
schoolGrades(['Lilly 6 6 4 6 6',
    'Tim 2 2 6',
    'Tammy 6 6 6 3',
    'Tim 6', 'Tim 6', 'Tim 6']);