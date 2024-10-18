
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
let full = new Brand('ford','mustang',"USA")
console.log(full)
full.word()
full.continue1()




class book {
    constructor(name,author) {
        this.name = name 
        this.author = author 
    }
    static func() {
        let ask = prompt("List the books you have read (separate them with commas)")
        let answer = ask.split(',')
        let count = answer.length
        console.log(`Number of books read: ${count}`)

      }
    }

let final = new book ('player','dostoevsky')
console.log(final)


class book2 {
    constructor(name1,author1) {
        this.name1 = name1 
        this.author1 = author1
    }
}

class continu extends book2 {
    constructor(name1,author1) {
        super(name1,author1)
    }
}


let prompt1 = prompt("write one book and his author (separate them with commas)")
let splited = prompt1.split(',')

if(splited.length === 2 ) {
    let user_book = new continu(splited[0],splited[1])
    console.log(user_book);
} else {
    console.log("Please provide both a book name and an author.");
}




