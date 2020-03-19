function grades(grade) {
    if (2 >= grade && grade < 3) {
        return 'Fail';
    } else if (3 <= grade && grade <= 3.49) {
        return 'Poor';
    } else if (3.5 <= grade && grade < 4.5) {
        return 'Good';
    } else if (4.5 <= grade && grade < 5.5) {
        return 'Very good';
    } else if (5.5 <= grade && grade <= 6) {
        return 'Excellent'
    }
}
console.log(grades(4.49));
