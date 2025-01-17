let h1 = document.querySelector('h1')
let storedName = localStorage.getItem('name')
let box = document.querySelector('.box')
let box2 = document.querySelector('.box2')

h1.textContent = 'hello' + " " + storedName

box.addEventListener('click',() =>{
    window.location.href = 'index3.html'
})

box2.addEventListener('click',() =>{
    window.location.href = 'index4.html'
})