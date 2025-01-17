const name1 = prompt("enter your name")
const p = document.getElementById("name")
const p2 = document.getElementById("surname")
const p3 = document.getElementById("age")


function first(name){
    return p.textContent = "your name is " + name 
}

print(first(name1))


const surname1 = prompt("enter your surname")

function last(surname){
    return p2.textContent = "your surname is " + surname 
}

print(last(surname1))




const age1 = prompt("enter your age")

function num(age){
    return p3.textContent = "your age is " + age 
}

print(num(age1))


