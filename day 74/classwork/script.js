class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
    
    printInfo() {
        console.log(`This book is "${this.name}" by ${this.author}.`);
    }
}

function stat() {
    let ask = prompt("Have you read this book? (yes/no)"); 
    return ask === 'yes'; 
}

if (stat()) { 
    console.log("Welcome");
}

let newBook = new Book('Player', 'Fyodor Dostoevsky');
newBook.printInfo();
