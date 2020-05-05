function systemRegiser(input = []) {
    let register = {}

    for (let i = 0; i < input.length; i++) {
        const line = input[i];

        let [name, componenet, subcomponent] = line.split(' | ');
        if (i === 0 || !(register.hasOwnProperty(name))) {
            register[name] = {};
            register[name][componenet];
        }
        if (!(register[name].hasOwnProperty(componenet))) {

            register[name][componenet] = [subcomponent]

        } else {
            register[name][componenet] = register[name][componenet].concat(subcomponent)
        }

    }
    let sorted = Object.keys(register).sort((a, b) => sorting(register[a], register[b]))

    function sorting(firstObj, secondObj) {
        let firstSys = Object.entries(firstObj);
        let secondSys = Object.entries(secondObj);

        return secondSys.length - firstSys.length || (secondSys[0][0]).localeCompare(firstSys[0][0])
    }

    // console.log(register);
    // console.log(sorted);

    sorted.forEach((key) => {
        console.log(key);
        let sortedComponents = Object.keys(register[key]).sort((a, b) => a.length - b.length )
        sortedComponents.forEach((element) => console.log(`|||${element}`))
    })

    
}



systemRegiser([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);