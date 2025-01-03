const score = document.getElementById('score')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')


localStorage.setItem('start',0)
let count = localStorage.getItem('start')


function func(){
    score.textContent = count
}

function plus1(){
    plus.addEventListener('click',() =>{
        count++
        func()
    })
}

plus1()

function minus1(){
    minus.addEventListener('click',() =>{
        count--
        func()
    })
}

minus1()