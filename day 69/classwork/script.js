const btn = document.getElementById("btn")
const name1 = document.getElementById("name")
const surname = document.getElementById("surname")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const numb = document.getElementById("number")




btn.addEventListener('click',function account(event){

    const object = {
        name:name1.value,
        surname1:surname.value,
        email1:email.value,
        password:pass.value,
        number:numb.value
    }
    event.preventDefault();

    console.log(object)
})



const arr = [1,2,3,4,5]

for(const i in arr){
    console.log(i)
}  // აბრუნებს მხოლოდ ინდექსებს 


const arr2 = [1,2,3,4,5]

for(const i of arr){
    console.log(i)
}  // აბრუნებს მხოლოდ მნიშვნელობებს 

