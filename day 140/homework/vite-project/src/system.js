const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();  

        if (password.value !== repeatPassword.value) {
            alert("Password and repeat password must be the same.");
        } else {
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);
            
            alert('Registration successful!');
            window.location.href = "login.html"; 
        }
    });
}



const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const form2 = document.getElementById('form2');

if (form2) {
    form2.addEventListener('submit', function(e2) {
        e2.preventDefault();  

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (loginEmail.value === storedEmail && loginPassword.value === storedPassword) {
            window.location.href = "home.html";
        } else {
            alert("Invalid login credentials Please try again");
        }
    });
}