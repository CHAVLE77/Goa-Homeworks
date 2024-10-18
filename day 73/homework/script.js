let full = new Brand('ford','mustang',"USA")
console.log(full)
full.word()
full.continue1()


class Animal {
    constructor(name,foot) {
        this.name = name
        this.foot = foot
    }
}

let animal = new Animal('cow', 4)
console.log(animal)




//inheritance
class car {
    constructor(country){
        this.country = country
}
    word() {
        console.log("this car is from " + this.country);
    }

}

class Brand extends car {
    constructor(name,brand,country) {
        super(country)
        this.brand = brand
        this.name = name

    }

    continue1() {
        console.log("this car is" + " " + this.name + " " + this.brand)
    }

}



