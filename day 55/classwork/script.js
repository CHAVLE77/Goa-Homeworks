const addplus = document.getElementById("plus");
const addminus = document.getElementById("minus");
const adddisplay = document.getElementById("display");


let total = 0;


function count(){
    adddisplay.textContent=total;
}

addplus.addEventListener('click',function(){
    total += 1;
count();
})

addminus.addEventListener('click',function(){
    total -= 1;
count();
})




const num1 = prompt("enter number: ")
const num2 = prompt("enter number: ")


function plus(a,b){
    return alert(Number(a) + Number(b))
}

print(plus(num1,num2))



const num3 = prompt("enter number: ")
const num4 = prompt("enter number: ")


function plus(a,b){
    return alert(Number(a) - Number(b))
}

print(plus(num1,num2))


const num5 = prompt("enter number: ")
const num6 = prompt("enter number: ")


function plus(a,b){
    return alert(Number(a) * Number(b))
}

print(plus(num1,num2))

const num7 = prompt("enter number: ")
const num8 = prompt("enter number: ")


function plus(a,b){
    return alert(Number(a) / Number(b))
}

print(plus(num1,num2))
