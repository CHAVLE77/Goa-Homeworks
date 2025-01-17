
//1
const nums = [1, 2];

const [firstname,lastname] = nums

const me = {
    firstname:3,
    lastname:4
}

console.log(me)

//2
const person = { name: 'Alice', age: 25, city: 'New York' };

const {name,age} = person

console.log(name,age)




//3
const nestedArray = [1, [2, 3, [4, 5]]];

const [num1, [num2,num3, [num4,num5]]] = nestedArray

console.log(num4)


//4
const fruits = ['apple'];

const[fruit = "orange"] = fruits

console.log(fruit)


//5
const user = { id: 101, username: 'john_doe' };

const {id:userId,username:userName} = user

console.log(userId,userName)

//1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const result = [...array1,...array2]

console.log(result)

//2
const colors = ['red', 'green', 'blue'];

const clone = [...colors]

console.log(clone)

//3
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merge = {
    ...obj1,
    ...obj2
}

console.log(merge)

//4
const numbers = [10, 20, 30, 40, 50];

const[numbers1,...rest] = numbers

console.log(rest)

//5
function rest(...rest2){
    console.log(rest2)
}

rest([1,2,3,4])

//6
const arr = [1,2,3,4,5]

function arr2(...arr){
    console.log(arr)
}

arr2(arr)

//7
const user2 = { name: 'John', age: 30 };

const clone2 = {...user}

console.log(user)

//8
const car = { brand: 'Toyota', model: 'Corolla', year: 2020, color: 'blue' };

const { brand, model, ...other } = car;

console.log(brand);
console.log(model);            
console.log(other); 


//9

let fruit1 = 'orange'
let fruit2 = "apple"

const fruitss = [...fruit2,'banana', 'cherry',...fruit1];

//10
function greet(greeting = 'Hello', ...names) {
    console.log(greeting,...names)
    }
    
    greet('Hello','nika')