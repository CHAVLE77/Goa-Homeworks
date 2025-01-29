const txt = document.getElementById('txt')
const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    

async function func(url){
    try {
        let url2 = await fetch(url) 
        let storedUrl = await url2.json()
        console.log(storedUrl)
        txt.textContent = storedUrl.slip.advice 
    } catch (error) {
        console.error(error)
    }
}

func('https://api.adviceslip.com/advice')

})

