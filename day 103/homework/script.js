const txt = document.getElementById('txt')
const btn = document.getElementById('btn')
let count = 0
btn.addEventListener('click', () =>{
    async function func(url) {
        try {
            count++      
            let url2 = await fetch(url)
            let transform = await url2.json()
            console.log(transform)
            txt.textContent = transform.title            
        } catch (error) {
            console.error(error)
        }
    }
    func(`https://jsonplaceholder.typicode.com/todos/${count}`)
}) 