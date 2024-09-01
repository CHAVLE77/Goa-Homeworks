const me = {
    name1:"nika",
    surname:"chavleishvili",
    age:15
}
me.age = 16
delete me.age

console.log(me)
console.log(name1)
console.log(surname)





const info = {
    name1:"luka",
    surname:"chavleishvili",
    age:15,
    academy:"goa",
    language:"js",
    printname() {
        console.log(this.name1)
    },
    printsurname:function() {
        console.log(this.surname)
    }
}

info.name1 = "nika"
delete info.age

// ობიექტი არის ერთგვარი ინფორმაცია რომელსაც გააჩნია კუთვნილებები
// მეთოდი არის ფუნქცია რომელიც ეკუთვნის ობიექტს და მუშაობს ამ ობიექტზე
// this keyword არის იგივე სახელი ობიექტის თუ მაგალითად გრძელი სახელიაქ ობიექტს შეგვიძლია გაოვიყენოთ სახელის ნაცვლად this keyword



function Robot(name, surname) {
    this.name = name;
    this.surname = surname;    
    this.printInfo = function() {
        console.log(this.name);
        console.log(this.surname);
    };
}

const robot2 = new Robot("nika", "chavleishvili");
robot2.printInfo();


//კონსტრუქტორი არის ფუნქცია რითიც ვქმნით ობიექტებს
// new არის ცარიელი ობიექტი რომელიც გადაეცემა კონსტრუქტორს