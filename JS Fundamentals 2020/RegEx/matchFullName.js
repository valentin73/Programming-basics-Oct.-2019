function matchfullNames(names){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let validNames = [];

    while((validName = pattern.exec(names))){
        validNames.push(validName[0])
    }
    for (const iterator of validNames) {
        console.log(iterator);
    }

}

matchfullNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")