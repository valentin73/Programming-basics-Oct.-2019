function towns(townsInfo = []) {

    for (const town of townsInfo) {
        let currentLine = town.split(' | ');
        let [name, latitude, longitude] = [currentLine[0], Number(currentLine[1]), Number(currentLine[2])];
        let currentTown = { town: name, latitude: latitude.toFixed(2), longitude: longitude.toFixed(2) };
        console.log(currentTown);
    }
    
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);