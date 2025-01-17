const name1 = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
let txt = ""; 

function data() {
    if(name1.value === txt) {
        alert("Sheavset yvela monacemi");
    } else if (surname.value === txt){
        alert("sheavset yvela monacemi")
    } else if(email.value === txt) {
        alert("sheavset yvela monacemi")
    } else if(password.value === txt) {
        alert("sheavset yvela monacemi")
    } else {
        console.log(name1.value)
        console.log(surname.value)
        console.log(email.value)
        console.log(password.value)
    }
}

submit.addEventListener("click", function(event) {
    event.preventDefault(); 
    data();
});
