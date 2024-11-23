const cont = document.querySelector('.container');

class Create {
    constructor() {
        let add = document.createElement('h1');
        add.textContent = 'Coding Quiz Challenge';
        cont.appendChild(add);
        
        let add2 = document.createElement('p');
        add2.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
        cont.appendChild(add2);
        
        let add3 = document.createElement('button');
        add3.textContent = "Start Now";
        cont.appendChild(add3);
        add3.addEventListener('click',function(){
            window.location.href = "index.html"
        })
    }
}

new Create();