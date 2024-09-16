const back = document.querySelector("#back")
const next = document.querySelector("#next")
const image1 = document.querySelector("img")
const image2 = ['car1.png','car2.png','car3.png']

count = 0 

function imagefunc() {
    
    if (count >= image2.length) {
        count = 0; 
    }
    if (count < 0) {
        count = image2.length - 1; 
    }
    image1.src = image2[count];
}

next.addEventListener('click',function(){
    count++
    imagefunc()
})

back.addEventListener('click',function(){
    count--
    imagefunc()
})





// const prev = document.querySelector('#prev');
// const next = document.querySelector('#next');
// const img = document.querySelector('img');

// const imgArr = ['car1.png', 'car2.png', 'car3.png'];
// let index = 0;

// next.addEventListener('click', function() {
//     index++;
//     if(index >= imgArr.length) {
//         index = 0;
//     }
//     img.src = imgArr[index];
// })

// prev.addEventListener('click', function() {
//     index--;
//     if(index < 0) {
//         index = 2;
//     }
//     img.src = imgArr[index];
// })


const div1 = document.querySelector("div")
const btn1 = document.getElementById("btn")

btn1.addEventListener('click',function(){
    const newP = document.createElement("p")
    div1.appendChild(newP)
    newP.textContent ="element created"
    newP.id = "createP"
})


const parent1 = document.getElementById("parent")

parent1.removeChild(parent1.firstElementChild)


parent1.children[1].remove()
