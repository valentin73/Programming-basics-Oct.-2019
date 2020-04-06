function cats(catInfo) {
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age,
            this.sing = function(){
                console.log('Meow');
            }
        }
    }

    let cats = [];

    for (let i = 0; i < catInfo.length; i++) {
        let currentCat = catInfo[i].split(' ');
        let [name, age] = [currentCat[0], currentCat[1]];
        cats.push(new Cat(name, age))
    }
    console.log();



}
cats(['Mellow 2', 'Tom 5'])