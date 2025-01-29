const txt = document.getElementById('txt')
const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
fetch('	https://api.adviceslip.com/advice').then(res => { 
    console.log(res)
    if(!res.ok){
        throw new Error('error');   
    }
    return res.json()
}).then(json => {
    txt.textContent = json.slip.advice 
}).catch(err => console.error(err))
})