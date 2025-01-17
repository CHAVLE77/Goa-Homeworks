const form = document.getElementById('form');
const id = document.getElementById('id');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const enter = document.getElementById('enter');
const enterGrade = document.querySelector('.enterGrade');
const FORM = document.getElementById('FORM');
const submit = document.getElementById('submit');
const i = document.querySelector('.fa-right-from-bracket');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();  

        if (password.value !== repeatPassword.value) {
            alert("The password and repeat password must be the same.");
            return;
        }

        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

        const existingAccount = accounts.find(account => account.id === id.value);
        if (existingAccount) {
            alert("An account with this ID already exists..");
            return;
        }

        const newAccount = {
            id: id.value,
            password: password.value
        };

        accounts.push(newAccount);
        localStorage.setItem('accounts', JSON.stringify(accounts));

        alert('registration successful!');
        window.location.href = "login.html"; 
    });
}

const loginId = document.getElementById('login-id');
const loginPassword = document.getElementById('login-password');
const form2 = document.getElementById('form2');
const rememberMe = document.getElementById('checkbox'); 

if (form2) {
    form2.addEventListener('submit', function(e2) {
        e2.preventDefault();  

        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

        const account = accounts.find(account => account.id === loginId.value && account.password === loginPassword.value);

        if (account) {
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid login details. Please try again.");
        }
    });
}

enter.addEventListener('click', () => {
    enterGrade.style.display = "block";
});

if (FORM) {
    FORM.addEventListener('submit', function(e3) {
        e3.preventDefault();

        const grade = document.getElementById("grade").value;
        const grade2 = document.getElementById("grade2").value;
        const grade3 = document.getElementById("grade3").value;
        const grade4 = document.getElementById("grade4").value;

        if (grade.length > 2 || grade2.length > 2 || grade3.length > 2 || grade4.length > 2) {
            alert('Error: each grade must be exactly 2 or 1 characters long');
        }

        if (Number(grade) > 10 || Number(grade2) > 10 || Number(grade3) > 10 || Number(grade4) > 10) {
            alert('Please enter a real grade (between 0 and 10).');
        }


        localStorage.setItem('select', select.value);
        let map = new Map();
        map.set('grade1', grade);
        map.set('grade2', grade2);
        map.set('grade3', grade3);
        map.set('grade4', grade4);
        localStorage.setItem('map', JSON.stringify([...map]));  

    });

    i.addEventListener('click', () =>{
        enterGrade.style.display = 'none'
    });
}

