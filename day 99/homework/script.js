const image = document.getElementById('image')
fetch('https://fakestoreapi.com/products/1').then(res=>res.json()).then(json=>{
    image.src = json.image
    document.getElementById('category').textContent = json.category
    document.getElementById('price').textContent = json.price + '$'
    document.getElementById('desc').textContent = json.description
    console.log(json)
})

const link = document.getElementById('link')
const box2 = document.querySelector('.box2')
box2.style.display = 'none'

link.addEventListener('click',() =>{
    box2.style.display = 'block'
})