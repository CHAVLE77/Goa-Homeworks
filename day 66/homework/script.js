const create = document.createElement("p")

create.textContent = "Hello World"

document.body.appendChild(create)

const div1 = document.querySelector("div")

const clone = div1.cloneNode(true)

document.body.appendChild(clone)

const ul1 = document.querySelector("ul")

ul1.removeChild(ul1.firstElementChild)


const div2 = document.getElementById("div")

const newH2 = document.createElement("h2")

newH2.textContent = "H2"

div2.replaceChild(newH2,div2.childNodes[0])

const remove1 = document.getElementById("remove")

remove1.remove()


const spec = document.getElementById("spec")
const create2 = document.createElement("span")
const create3 = document.createElement("span")
const create4 = document.createElement("span")

create2.textContent = "span1"
create3.textContent = "span2"
create4.textContent = "span3"



spec.appendChild(create2)
spec.appendChild(create3)
spec.appendChild(create4)


const btn = document.createElement("button")
btn.textContent = "click me"
btn.addEventListener('click',function(){
    document.body.appendChild(btn.cloneNode(true))
})

document.body.appendChild(btn)


const imgDiv = document.getElementById('img-div')
const image = document.querySelector('img')

image.remove()
imgDiv.appendChild(image)


const createBtn = document.createElement("button")
const createBtn2 = document.createElement("button")

    const click = document.getElementById('click')
    click.style.display = "none"
   

createBtn.textContent = "show"
createBtn2.textContent = "hide"

createBtn.addEventListener('click',function(){
    click.style.display = "block"
})

createBtn2.addEventListener('click',function(){
    click.style.display = "none"
})


document.body.appendChild(createBtn);
document.body.appendChild(createBtn2);

//project
const taskUl = document.getElementById("taskUl");
const task = document.getElementById("task"); 
const createbuttn = document.createElement("button");
const createbuttn2 = document.createElement("button");

createbuttn.textContent = "Add More";
createbuttn2.textContent = "Delete";

createbuttn.style.display = "none";
createbuttn2.style.display = "none";

document.body.appendChild(createbuttn);
document.body.appendChild(createbuttn2);

task.addEventListener('click', function() {
    createbuttn.style.display = "inline";
    createbuttn2.style.display = "inline";
});


createbuttn2.addEventListener("click",function(){
    taskUl.removeChild(taskUl.firstElementChild)
})

const createTask = document.createElement("li")
createTask.textContent = "Find the Largest Number: Create a function that takes an array of numbers and returns the largest number in the array"

createTask.style.display = "none"
createbuttn.addEventListener('click',function(){
    taskUl.replaceChild(createTask,taskUl.childNodes[0])
    task.remove()
    createTask.style.display = "inline"
})

taskUl.appendChild(createTask)
