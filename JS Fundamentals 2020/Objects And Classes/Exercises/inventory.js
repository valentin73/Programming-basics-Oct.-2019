function inventory(input = []){
    let register = []
    for (const line of input) {
        let commands = line.split(' / ');
        let [name, level , ...items] = [commands[0],commands[1],commands[2]]
        
    }
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )