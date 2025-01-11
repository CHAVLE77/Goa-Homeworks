const input = document.getElementById('input')


input.addEventListener('input',()=>{
    let color = input.value
    document.body.style.backgroundColor = color
    localStorage.setItem('input',color)

})

let storedColor = localStorage.getItem('input')

if(storedColor){
    document.body.style.backgroundColor = storedColor
    input.value = storedColor
}
