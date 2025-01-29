fetch('https://fakestoreapi.com/product').then(res =>{ 

console.log(res)
if(!res.ok){
    throw new Error(`something went wrong! your error is ${res.status}`)
}

return res.json()
}
).catch(error => console.error(error))

const image = document.getElementById('image')
const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
fetch('https://dog.ceo/api/breeds/image/random').then(res=> res.json()).then(res2=>{
    console.log(res2)
        image.src = res2.message
        image.style.width = '200px'
    })
})


