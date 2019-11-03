function oldBooks(input){
    let book = input.shift();
    let amount = +input.shift();

    let counter = 0;
    let bookIsFound = false;

    let nextBookName = input.shift()
    while(counter < amount){
        if(nextBookName == book){
            bookIsFound = true;
            break;
        }
        counter++;
        nextBookName = input.shift();
    }
    if(bookIsFound == false){
        console.log("The book you search is not here!");
        console.log(`You checked ${amount} books.`);
        
    }else{
        console.log(`You checked ${counter} books and found it.`);
        
    }
}
oldBooks(
    [ 'Troy', '8', 'Stronger', 'Life Style', 'Troy', '' ]
)