function phoneBook(input){
    let list = new Map();

    input.forEach(element => {
        let [name, number] = element.split(' ');
        list.set(name , number)
    });

    for (const [name, number] of list) {
        console.log(`${name} -> ${number}`);
    }

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);