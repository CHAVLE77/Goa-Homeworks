class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log("Dog barks");
    }
}

class Mammal extends Dog {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    speak2() {
        console.log("Mammal sound");
    }
}

class Animals extends Mammal {
    constructor(name, color) {
        super(name, color); 
    }
    common() {
        console.log("Dogs and mammals are animals");
    }
}

class Eagle {
    constructor(name) {
        this.name = name;
    }
    speak3() {
        console.log("Eagle sound");
    }
}

class Crow extends Eagle {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    speak4() {
        console.log("Crow sound");
    }
}

class Birds extends Crow {
    constructor(name, color) {
        super(name, color); 
    }
    common2() {
        console.log("Eagle and crow are birds");
    }
}

class FinalCommon extends Animals { 
    constructor(name, color) {
        super(name, color); 
    }
    common3() {
        console.log('Birds and animals both have hearts');
    }
}

let final = new FinalCommon('Creature', 'Brown');
console.log(final);
final.speak();   
final.speak2(); 
final.common();
final.common3(); 

let crow = new Birds('Crow', 'Black');
console.log(crow);
crow.speak4();  
crow.common2();   
crow.speak3();    
