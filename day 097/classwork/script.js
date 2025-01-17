const name1 = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const id = document.getElementById('id');
const height = document.getElementById('height');
const email = document.getElementById('email');
const desc = document.getElementById('description');
const form = document.getElementById('form');
const btn2 = document.getElementById('random');
const btn3 = document.getElementById('remove');



form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    if(name1.value.length > 0 && surname.value.length > 0 && age.value.length > 0){
        email.value = name1.value + surname.value + age.value + "@gmail.com"
    }
    localStorage.setItem('name', name1.value);
    localStorage.setItem('surname', surname.value);
    localStorage.setItem('age', age.value);
    localStorage.setItem('id', id.value);
    localStorage.setItem('height', height.value);
    localStorage.setItem('email', email.value);

    if(age.value.length > 2){
        alert('please enter a real age')
        return
    }

    if(height.value.length > 3){
        alert('please enter a real height')
        return
    }

    window.location.href = "index2.html";
});


let letters = "qwertyuiopasdfghjklzxcvbnm"
let symbols = "!@#$%^&*()"
let numbers = "1234567890"

btn2.addEventListener('click',() =>{
    name1.value += letters[Math.floor(Math.random() * letters.length)]
    name1.value += letters[Math.floor(Math.random() * letters.length)]
    name1.value += letters[Math.floor(Math.random() * letters.length)]
    name1.value += letters[Math.floor(Math.random() * letters.length)]
    name1.value += letters[Math.floor(Math.random() * letters.length)]
    surname.value += letters[Math.floor(Math.random() * letters.length)]
    surname.value += letters[Math.floor(Math.random() * letters.length)]
    surname.value += letters[Math.floor(Math.random() * letters.length)]
    surname.value += letters[Math.floor(Math.random() * letters.length)]
    surname.value += letters[Math.floor(Math.random() * letters.length)]
    age.value += numbers[Math.floor(Math.random() * numbers.length)]
    age.value += numbers[Math.floor(Math.random() * numbers.length)]
    id.value += numbers[Math.floor(Math.random() * numbers.length)]
    id.value += numbers[Math.floor(Math.random() * numbers.length)]
    id.value += numbers[Math.floor(Math.random() * numbers.length)]
    id.value += numbers[Math.floor(Math.random() * numbers.length)]
    id.value += numbers[Math.floor(Math.random() * numbers.length)]
    id.value += numbers[Math.floor(Math.random() * numbers.length)]
    id.value += numbers[Math.floor(Math.random() * numbers.length)]
    id.value += numbers[Math.floor(Math.random() * numbers.length)]
    id.value += numbers[Math.floor(Math.random() * numbers.length)]
    height.value += numbers[Math.floor(Math.random() * numbers.length)]
    height.value += numbers[Math.floor(Math.random() * numbers.length)]
    height.value += numbers[Math.floor(Math.random() * numbers.length)]  
})

btn3.addEventListener('click', () =>{
    name1.value = ''
    surname.value = ''
    age.value = ''
    height.value = ''
    id.value = ''
    email.value = ''

})

