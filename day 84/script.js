const main = document.querySelectorAll('main');
const card = document.querySelector('.card');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const cardP = document.getElementById('cardP');
const card2P= document.getElementById('card2P');
const card3P = document.getElementById('card3P');
const cardP4 = document.getElementById('cardP4');
const card1P2 = document.getElementById('card1P2');
const card2P2 = document.getElementById('card2P2');
const card3P2 = document.getElementById('card3P2');
const card4P = document.getElementById('card4P');
const card4P2 = document.getElementById('card4P2');



let image = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]

let add = document.createElement('img')
add.src= image[0]

add.classList.add('image')
card.appendChild(add);


let add2 = document.createElement('img')
add2.src = image[1]

add2.classList.add('image')
card2.appendChild(add2)



let add3 = document.createElement('img')
add3.src = image[2]

add3.classList.add('image')
card3.appendChild(add3)



let add4 = document.createElement('img')
add4.src = image[3]

add4.classList.add('image')
card4.appendChild(add4)




class bird {
    constructor(name,ability) {
        this.birdName = name
        this.ability = ability
        cardP.textContent =  `${this.birdName}`
        card1P2.textContent = `${'can' + ":" + this.ability}`
    }
}

name1 = new bird('bird','fly')

class dog {
    constructor(name2,ability2) {
        this.dogName = name2
        this.ability2 = ability2
        card2P.textContent =  `${this.dogName}`
        card2P2.textContent = `${'can' + ":" + this.ability2}`
    }
}


dogName2 = new dog('dog','bark')


class snake {
    constructor(name3,ability3) {
        this.snakeName = name3
        this.ability3 = ability3
        card3P.textContent =  `${this.snakeName}`
        card3P2.textContent = `${'can' + ":" + this.ability3}`
    }
}

snakeName2 = new snake('snake','slide')

class fish {
    constructor(name4,ability4) {
        this.fishName = name4
        this.ability4 = ability4
        card4P.textContent =  `${this.fishName}`
        card4P2.textContent = `${'can' + ":" + this.ability4}`
    }
}

fishName2 = new fish('fish',"swim")