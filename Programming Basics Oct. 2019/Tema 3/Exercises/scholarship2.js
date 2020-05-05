function scholarship(income, grade, minWage) {

    let socialScholarship = minWage * 0.35;
    let gradeScholarship = grade * 25;

    if ((income < minWage) && grade >= 4.5 && grade < 5.5) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
    }
    if (grade >= 5.5 && (socialScholarship <= gradeScholarship)) {
        console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);

    } else if (grade >= 5.5 && (socialScholarship > gradeScholarship)) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)

    } else if ((income > minWage) || grade < 4.5) {
        console.log("You cannot get a scholarship!");

    }
}
scholarship(300, 4.65, 420);