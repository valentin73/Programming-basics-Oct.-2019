function neighborhoods(input) {
    let nieghborhoodsList = input.shift().split(', ');
    let mapList = new Map()

    nieghborhoodsList.forEach(element => {
        mapList.set(element, [])
    });

    for (const line of input) {
        let [currNeighbourhood, person] = line.split(' - ')

        if (mapList.has(currNeighbourhood)) {
            mapList.get(currNeighbourhood).push(person)
        }

    }
    
    function sorting(a, b) {
        return  b[1].length - a[1].length;
    }

    let sorted = Array.from(mapList).sort((a, b) => sorting(a, b));
    
    let result = new Map(sorted);

    for (const [hood, resident] of result) {
        console.log(`${hood}: ${resident.length}`);
        
        for (const currentName of resident) {
            console.log(`--${currentName}`);
        }
        
    }

}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)