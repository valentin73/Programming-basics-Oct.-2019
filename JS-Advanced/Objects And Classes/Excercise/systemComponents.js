function systemComponents(input = []) {
    const allSystems = {};

    input.forEach(el => {
        const [name, component, subcomp] = el.split(' | ');

        if (allSystems.hasOwnProperty(name) === false) {
            allSystems[name] = {};
        }
        if (allSystems[name].hasOwnProperty(component) === false) {
            allSystems[name][component] = [];
        }
        allSystems[name][component].push(subcomp);
    });

    const sortedSys = Object.entries(allSystems)
    .sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length ||
        a[0].localeCompare(b[0]) 
    })

    sortedSys.forEach(sys =>{
        const currentSys = sys[1];
        const sortedCom = Object.entries(currentSys).sort((a,b) => {
            return b[1].length - a[1].length
        })
        console.log(sys[0]);
        sortedCom.forEach(el =>{
            console.log(`|||${el[0]}`);
            el[1].forEach(el =>{console.log(`||||||${el}`);})
        })
        
    })

}

systemComponents(['SULS | Main Site | Home Page',
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
    'Indice | Session | Default Security']
)