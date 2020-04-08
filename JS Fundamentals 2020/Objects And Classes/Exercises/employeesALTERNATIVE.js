function employees(workers){
    let employeesList = []
    for (const worker of workers) {
        let currentPersonalNumber = worker.length;
        let currentObj = {name: worker, personalNumber: currentPersonalNumber}
        employeesList.push(currentObj)
    }   

    for (const currEmployee of employeesList) {
        console.log(`Name: ${currEmployee.name} -- Personal Number: ${currEmployee.personanNumber}`);
        console.log(currEmployee);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )