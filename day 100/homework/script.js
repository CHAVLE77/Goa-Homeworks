const txt = document.getElementById('txt')
const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    
fetch('	https://api.adviceslip.com/advice').then(res => res.json()).then(json => {console.log(json)
    txt.textContent = json.slip.advice 
})

})