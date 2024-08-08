const addplus = document.getElementById("plus");
const addminus = document.getElementById("minus");
const adddisplay = document.getElementById("display");
const addreset = document.getElementById("reset");


let total = 0;


function counterdisplay(){
    adddisplay.textContent=total;
}

addplus.addEventListener('click',function(){
    total += 1;
counterdisplay();
})

addminus.addEventListener('click',function(){
    total -= 1;
counterdisplay();
})


addreset.addEventListener('click',function(){
    total = 0;
counterdisplay();
})