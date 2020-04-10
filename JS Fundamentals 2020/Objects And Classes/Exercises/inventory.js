function inventory(input = []) {
    let register = []
    for (const line of input) {
        let commands = line.split(' / ');
        let [name, level, items] = [commands[0], Number(commands[1]), commands[2]]
        let hero = {
            name: name,
            level: level,
            items: items
                .split(', ')
                .sort((a, b) => a.localeCompare(b))
                .join(', ')
        };
        register.push(hero)
        
    }

    register.sort((firstHero, secondHero) => firstHero.level - secondHero.level);
    for (const hero of register) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)