//1
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    info() {
        console.log(`car: ${this.brand} ${this.model}`);
    }
}

const myCar = new Car("dodge", "challenger");
myCar.info();

//2
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} sound: vaf vaf`);
    }
}

const dog = new Dog("bob");
dog.speak();


//3
class calc {
    static add(a, b) {
        return a + b;
    }
}

console.log(calc.add(5, 10));


//4
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length > 2) {
            this._name = newName;
        } else {
            console.log("the name is too short!");
        }
    }
}

const person = new Person("max");
console.log(person.name);
person.name = "sam"; // 
person.name = "michael"; 
console.log(person.name);


//5
class DataFetcher {
    async fetchData() {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    }
}

const fetcher = new DataFetcher();
fetcher.fetchData();
