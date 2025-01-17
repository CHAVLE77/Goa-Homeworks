for(i = 20; i < 50; i++){
    console.log(i)  //გამოაქვს რიცხვები 20 დან 50მდე for ის დახმარებით
}


 
i = 30
while (i <= 60){
    i++
    console.log(i)
}  //გამოაქვს რიცხვები 30 დან 60 მდე while ის დახმარებით




const btn = document.getElementById("btn")
const para = document.getElementById("para")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById('btn3')

function changeColor(color) {
    para.style.color = color
} //  უცვლის ფერს პარაგრაფს შესაბამის ღილაკზე დაჭერისას 



//alternative variant
const btn5 = document.getElementById("btn")
const para3 = document.getElementById("para")
const btn6 = document.getElementById("btn2")
const btn4 = document.getElementById('btn3')

function changeColor2() {
    btn.addEventListener('click',function(){
        para.style.color = 'green'
    })
    
    btn2.addEventListener('click',function(){
        para.style.color = 'red'
    })

    btn3.addEventListener('click',function(){
        para.style.color = 'blue'
    })
}
changeColor2()




const add = document.getElementById("add")
const buttn = document.getElementById("buttn")


let score = 0
function add2(){
    add.textContent = score
}

buttn.addEventListener('click',function(){
    score++
    add2() 
}) // გაკეთებულია იგივე count პარაგრაფი თავიდან 0 ის ტოლია ხოლო ყოველღილაკზე დაჭერისას პარაგრაფი იმატებს 1 ით (გაკეთებულია onclick() ით )


//alternative variant
const add3 = document.getElementById("add")
const buttn2 = document.getElementById("buttn")
let score2 = 0
buttn2.addEventListener('click',function(){
    add3.textContent=score2
    score2++
})



function generate_even(border){
    let lst = []
    let sum = 0
    for (let i = 0; i <= border; i++){
        lst.push(i);
    }
        for(let n = 0; n < lst.length;n++){
            sum += lst[n];
        }
        console.log(sum)
}
generate_even(10)
// გამოაქვს მასივში არსებული რიცხვების ჯამი


//alternative variant
function generate_even(border){
    let lst = []
    let sum = 0
    for (let i = 0; i <= border; i++){
        lst.push(i);
    }
    lst.forEach(function(iteration){
        sum+= iteration
    })
        
        console.log(sum)
        
}
generate_even(10)


