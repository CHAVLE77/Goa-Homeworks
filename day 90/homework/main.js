const cell = document.querySelectorAll(".cell");
const btn = document.getElementById('addGrade');
const box = document.querySelector(".addGradeDiv");
const add = document.getElementById('add');
const grade = document.getElementById('grade');

let count = 0;
const select1 = document.getElementById('select');
btn.addEventListener('click', () => {
    count++;
    count === 1 ? (box.style.display = "block", document.body.style.backgroundColor = "rgba(0,0,0,0.4)") 
        : (box.style.display = "none", document.body.style.backgroundColor = "", count = 0);
});

const midGrade = document.getElementById('mid-grade');

let storedMap = JSON.parse(localStorage.getItem('map'));
if (storedMap) {
    let map = new Map(storedMap);  

    let Grade1 = map.get('grade1');
    let Grade2 = map.get('grade2');
    let Grade3 = map.get('grade3');
    let Grade4 = map.get('grade4');

    let count = 0;
    cell.forEach((Element) => {
        count++;
        if (count === 1) {
            Element.textContent = Grade1;
        }
        if (count === 2) {
            Element.textContent = Grade2;
        }
        if (count === 3) {
            Element.textContent = Grade3;
        }
        if (count === 4) {
            Element.textContent = Grade4;
        }
    });

    midGrade.textContent = eval((Number(Grade1) + Number(Grade2) + Number(Grade3) + Number(Grade4)) / 4); 
}

function calculateAverage() {
    let sum = 0;  
    let count = 0;  

    cell.forEach(element => {
        if (element.textContent) {  
            sum += Number(element.textContent); 
            count++;
        }
    });

    if (count > 0) {
        midGrade.textContent = sum / count; 
    } else {
        midGrade.textContent = "0"; 
    }
}


add.addEventListener('click', () => {
    let gradeValue = Number(grade.value);  
    
    if (select1.value === 'მათემატიკა' && gradeValue > 0 && gradeValue <= 10) {
        cell[0].textContent = gradeValue;
        calculateAverage();  
    } else if (select1.value === 'ქართული' && gradeValue > 0 && gradeValue <= 10) {
        cell[1].textContent = gradeValue;
        calculateAverage();  
    } else if (select1.value === 'ისტორია' && gradeValue > 0 && gradeValue <= 10) {
        cell[2].textContent = gradeValue;
        calculateAverage();  
    } else if (select1.value === 'ინგლისური' && gradeValue > 0 && gradeValue <= 10) {
        cell[3].textContent = gradeValue;
        calculateAverage();  
    } else {
        alert('Enter a valid grade');  
    }
});

