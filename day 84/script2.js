const cont = document.querySelector('.container');
const btnDiv = document.querySelector('.btn-div');


class create {
    constructor() {
        let add = document.createElement('h1');
        add.textContent = 'Simple Quiz';
        cont.appendChild(add);

        let add2 = document.createElement('p');
        add2.textContent = "1. What does HTML stand for?";
        cont.appendChild(add2);

        let add3 = document.createElement('button');
        let add4 = document.createElement('button');
        let add5 = document.createElement('button');
        let addBtn = document.createElement('button');
        addBtn.textContent = "Next";
        addBtn.classList.add("spec");

        add3.textContent = "HyperText Markup Language";
        add4.textContent = "Hyperlinks and Text Markup Language";
        add5.textContent = "HotMail";

        btnDiv.appendChild(add3);
        btnDiv.appendChild(add4);
        btnDiv.appendChild(add5);
        cont.appendChild(addBtn);

        add3.addEventListener('click', () => {
            add3.style.backgroundColor = "green";
            add3.style.color = "white";
        });
        add4.addEventListener('click', () => {
            add4.style.backgroundColor = "red";
            add4.style.color = "white";
        });
        add5.addEventListener('click', () => {
            add5.style.backgroundColor = "red";
            add5.style.color = "white";
        });
        addBtn.addEventListener('click', () => {
            window.location.href = "index2.html"
        });
    }
}

new create();

