function city(name, area, population, country, postCode) {
    let cityInfo = { name: name, area: area, population: population, country: country, postCode: postCode }

    for (const key in cityInfo) {
        console.log(`${key} -> ${cityInfo[key]}`);
    }
}
city("Sofia", " 492", "1238438", "Bulgaria", "1000");