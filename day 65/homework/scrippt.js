const myp = document.getElementById("myparagraph");

myp.innerHTML = "myparagraph"

const mydiv = document.querySelector(".box");
const mydiv2 = document.querySelector(".box2");
mydiv.style.background = "red"
mydiv2.style.background = "blue"


const find = document.getElementsByTagName("li")
console.log(find)

const myh1 = document.getElementById("mainheading");

myh1.style.fontSize = "15px";
myh1.style.color = "red"


function specid(id){
    const specid1 = document.getElementById(id)
    specid1.innerHTML = "changed"
    console.log(specid1)
}

specid("mainheading")

function specclass(classname) {
    const speccclass1 = document.querySelector(classname)
    speccclass1.style.color = "blue"
    console.log(speccclass1)
}

specclass(".spc1")


const spcp = document.getElementsByTagName("p");
spcp.innerHTML = "paragraph"


const my_div = document.querySelector(".togglediv")
const btn1 = document.getElementById("hide")
const btn2 = document.getElementById("show")


btn1.addEventListener('click',function(){
    my_div.style.display = "none"
})


btn2.addEventListener('click',function(){
    my_div.style.display = "block"
})

const table1 = document.getElementsByTagName("td")

for (let i = 0; i < table1.length; i++) {
    if (i % 2 === 0) {
        table1[i].style.color = "red";
    }
}