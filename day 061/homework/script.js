const person = {
    name1:"nika",
    age:15,
    city:"batumi"
}
person.age = 16
person.hobby = "playing or watch football"
delete person.city

const bmw = {
    model:"m5",
    year:1984
}

console.log(bmw.model,bmw.year)


const sum = {
    a: 20,
    b: 22,
    add() {
        console.log(this.a + this.b)
    }
}
sum.add()


const book = {
    name:"antonio da daviti",
    pages:200-300,
    author:"daniel vudrous"
}

const book2 = {
    name:"animal farm",
    pages:150,
    author:"george orwell"
}

const book3 = {
    name:"persepolise",
    pages:400,
    author:"marjane satrapi"
}

function animal(name,sound) {
    this.name = name
    this.sound = sound
    this.makeSound = function() {
        console.log(this.sound)
    }
}
const animall = new animal("cat","miaw miaw")
animall.makeSound()



function animal2(name,sound) {
    this.name = name
    this.sound = sound
    this.animals=function() {
        console.log(this.name,this.sound)
    }
    this.changeMethod = function() {
        console.log(animal2.properties = "cow","muuuu")
    }
}


const properties  = new animal2("dog","vaf vaf")
const properties2 = new animal2("cat","miaw miaw")
properties.animals()
properties2.animals()
properties.changeMethod()
