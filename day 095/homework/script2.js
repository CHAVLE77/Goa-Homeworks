const Pname = document.getElementById('Pname');
const Psurname = document.getElementById('Psurname');
const Page = document.getElementById('Page');
const Pid = document.getElementById('Pid');
const Pheight = document.getElementById('Pheight');
const Pemail = document.getElementById('Pemail');

let storedName = localStorage.getItem('name');
let storedSurname = localStorage.getItem('surname');
let storedAge = localStorage.getItem('age');
let storedHeight = localStorage.getItem('height');
let storedId = localStorage.getItem('id');
let storedEmail = localStorage.getItem('email');

Pname.textContent = storedName ;
Psurname.textContent = storedSurname;
Page.textContent = storedAge;
Pid.textContent = storedId;
Pheight.textContent = storedHeight;
Pemail.textContent = storedEmail;
