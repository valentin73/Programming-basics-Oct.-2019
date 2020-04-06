function convertToObject(input){
    let convertedObject = JSON.parse(input);

    for (const key in convertedObject) {
       console.log(`${key}: ${convertedObject[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')