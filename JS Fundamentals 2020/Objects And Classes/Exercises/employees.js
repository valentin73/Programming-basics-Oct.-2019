function employees(workers){
    class Employee {
        constructor(name, personalNumber) {
            this.name =  name,
            this.personalNumber = personalNumber
        }
    }
    let employeesList = []
    for (const worker of workers) {
        let currentPersonalNumber = worker.length;
        let currentObj = new Employee(worker, currentPersonalNumber);
        employeesList.push(currentObj)
    }   

    for (const currEmployee of employeesList) {
        console.log(`Name: ${currEmployee.name} -- Personal Number: ${currEmployee.personalNumber}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )