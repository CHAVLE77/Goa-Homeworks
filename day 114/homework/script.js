class car {
    constructor(name,model) {
        this.name = name
        this.model = model
    }
}

let res = new car('dodge',"challenger")
console.log(res)

class Animal {
    constructor(animal1, animal2, animal3, animal4, animal5) {
        this.animal1 = animal1;
        this.animal2 = animal2;
        this.animal3 = animal3;
        this.animal4 = animal4;
        this.animal5 = animal5;
    }

    makeSound() {
        console.log(`${this.animal1} sound: vaf vaf`);
        console.log(`${this.animal2} sound: miaw miaw`);
        console.log(`${this.animal3} sound: muu muu`);
        console.log(`${this.animal4} sound: mee mee`);
        console.log(`${this.animal5} sound: grr grr`);
    }
}

let result = new Animal('dog', 'cat', 'cow', 'sheep', 'lion');
result.makeSound(); 
