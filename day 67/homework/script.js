const child = document.querySelector(".child");
const p = document.querySelector("p")
let left = 0 
let position = 1;
let count = 0

setInterval(function(){
    count++
},64)

setInterval(function() {
    
    left += position;
    child.style.width = left + 'px'; 
    if(left>=650){
        child.style.left = "427px"
        child.style.borderBottomRightRadius = "15px"
        child.style.borderTopRightRadius = "15px"
        left = 650
        count = 100
    }
    p.textContent = count + "%"
}, 10);
