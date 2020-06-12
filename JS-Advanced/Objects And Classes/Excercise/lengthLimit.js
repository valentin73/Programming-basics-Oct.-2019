class Stringer {
    constructor(name, length) {
        this.innerString = name;
        this.innerLength = length;
        this.float = this.innerLength
    }
    increase(num) {
        this.innerLength += num;
    }

    decrease(num) {
        //const currLength = (this.innerLength - num)
        if (this.innerLength - num <= 0) {
            this.innerLength = 0
        } else {
            this.innerLength -= num;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            const diff = this.innerLength;
            this.innerLength = this.float;
            return (this.innerString.substring(0, diff)+ '...');
        } else {
            this.innerLength = this.float;
            return (this.innerString);
        }
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(10);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
