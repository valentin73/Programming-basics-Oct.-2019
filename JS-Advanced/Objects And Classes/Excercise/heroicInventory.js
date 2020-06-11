function heroicInventory(input = []) {
    let result = [];

    for (const hero of input) {
        let [name, level,items] = hero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : []
        let currentObj = { name: name, level: level, items: items };

        result.push(currentObj);
    }

    console.log(JSON.stringify(result));

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)