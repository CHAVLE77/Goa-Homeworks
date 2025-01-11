const btn = document.getElementById('btn');
const input = document.getElementById('name');
const form = document.getElementById('form')

if(form){
    form.addEventListener('submit',(e) =>{
        e.preventDefault()
        if(input.value.length > 0){
            localStorage.setItem('name',input.value)
            window.location.href = 'index2.html'  
        }
    })
}