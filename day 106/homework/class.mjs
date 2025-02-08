export class person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
}


export function string1(str){
    return `name: ${str.name}, age: ${str.age}`
}