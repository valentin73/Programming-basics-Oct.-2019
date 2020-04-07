function cats(catInfo) {
    class Cat {
        constructor(name, age) {
            this.name = name,
                this.age = age,
                this.meow = function () {
                    console.log(`${this.name}, age ${this.age} says Meow`);
                }
        }
    }

    let cats = [];

    for (let i = 0; i < catInfo.length; i++) {
        let currentCat = catInfo[i].split(' ');
        let [name, age] = [currentCat[0], currentCat[1]];
        cats.push(new Cat(name, age))
    }

    for (const cat of cats) {
        cat.meow()
    }
}
cats(['Mellow 2', 'Tom 5'])