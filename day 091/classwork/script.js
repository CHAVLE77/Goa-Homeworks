const title = document.getElementById("title")
const author = document.getElementById("author")
const price = document.getElementById("price")
const after = document.getElementById("after")
const box = document.querySelector(".box")
const btn = document.getElementById("btn")
const genre = document.getElementById("genre")
const bP = document.getElementById("b-p")
const favorite = document.getElementById("favorite")
const fav = document.getElementById("fav")


        favorite.addEventListener('click',() =>{
            window.location.href = 'favorites.html';
        })  

        document.getElementById('btn').addEventListener('click', () => {
            localStorage.setItem('box1', 'spec-box');
        });

        document.getElementById('btn2').addEventListener('click', () => {
            localStorage.setItem('box2', 'box2');
        });

        document.getElementById('btn3').addEventListener('click', () => {
            localStorage.setItem('box3', 'box3');
        });

        document.getElementById('btn4').addEventListener('click', () => {
            localStorage.setItem('box4', 'box4');
        });

        document.getElementById('btn5').addEventListener('click', () => {
            localStorage.setItem('box5', 'box5');
        });

        document.getElementById('btn6').addEventListener('click', () => {
            localStorage.setItem('box6', 'box6');
        });

function disableButtons(disabled) {
    author.style.pointerEvents = disabled ? "none" : "auto";
    price.style.pointerEvents = disabled ? "none" : "auto";
    author.style.opacity = disabled ? 0.5 : 1;
    price.style.opacity = disabled ? 0.5 : 1;
}


title.addEventListener("click", function () {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");

        disableButtons(true)  
        author.style.position = 'relative'
        author.style.bottom = '50px'
        price.style.position = 'relative'
        price.style.top = '-50px'
        dropdownAuthor.style.display = 'none'
        dropdownPrice.style.display = 'none'
        specLi.style.position = 'relative'

    } else {
        dropdown.classList.add("hidden");
        disableButtons(false)
        author.style.position = 'relative'
        author.style.bottom = '0px'
        price.style.position = 'relative'
        price.style.top = '3px'
    }
});

author.addEventListener("click", function () {
    const dropdownAuthor = document.getElementById("dropdown-author");
    if (dropdownAuthor.classList.contains("hidden")) {
        dropdownAuthor.classList.remove("hidden");
        price.style.position = 'relative'
        price.style.top = '-63px'
        title.style.pointerEvents = "none"; 
        price.style.pointerEvents = "none"; 
        title.style.opacity = 0.5;
        price.style.opacity = 0.5;
        } else {
        dropdownAuthor.classList.add("hidden");
        price.style.position = 'relative'
        price.style.top = '5px'
        title.style.pointerEvents = "auto";
        price.style.pointerEvents = "auto";
        title.style.opacity = 1;
        price.style.opacity = 1;
    }
});

price.addEventListener("click", function () {
    const dropdownPrice = document.getElementById("dropdown-price");
    if (dropdownPrice.classList.contains("hidden")) {
        dropdownPrice.classList.remove("hidden");
        title.style.pointerEvents = "none"; 
        author.style.pointerEvents = "none"; 
        title.style.opacity = 0.5;
        author.style.opacity = 0.5; 
       }else {
        dropdownPrice.classList.add("hidden");
        title.style.pointerEvents = "auto";
        author.style.pointerEvents = "auto"; 
        title.style.opacity = 1;
        author.style.opacity = 1;
    }
});

box.addEventListener('mouseover',() =>{
    genre.style.display = 'inline'
    bP.style.display = 'inline'
    btn.style.display = 'block'
    after.style.position = 'relative'
    after.style.top = '5px'
})


const box2 = document.getElementById("box2");
const after2 = document.getElementById("after");
const genre2 = document.getElementById("genre2");
const bP2 = document.getElementById("b-p2");
const btn2 = document.getElementById("btn2");

box2.addEventListener('mouseover', () => {
    genre2.style.display = 'inline';
    bP2.style.display = 'inline';
    btn2.style.display = 'block';
    after2.style.position = 'relative';
    after2.style.top = '5px';
});


if (!localStorage.getItem("addedBooks")) {
    localStorage.setItem("addedBooks", JSON.stringify([]));
}

let count = 0
document.querySelectorAll(".box button").forEach((button) => {
    button.addEventListener("click", (e) => {
        count++
        const box = e.target.closest(".box");

        const title = box.querySelector("b").innerText;
        const author = box.querySelector("#after").innerText;
        const price = box.querySelector("p[id^='spec-p']").innerText;
        const imgSrc = box.querySelector("img").src;

        const addedBooks = JSON.parse(localStorage.getItem("addedBooks"));

        addedBooks.push({ title, author, price, imgSrc });
        localStorage.setItem("addedBooks", JSON.stringify(addedBooks));
        let content= fav.textContent = count
        localStorage.setItem('content',content)
    });
});

