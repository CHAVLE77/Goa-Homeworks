const day = document.getElementById("day");
const month = document.getElementById("month");                                   
const year = document.getElementById("year");
const b1 = document.getElementById("b-1");
const b2 = document.getElementById("b-2");
const b3 = document.getElementById("b-3");
const btn = document.getElementById("submit")
const p1 = document.getElementById("p-day")
const p2 = document.getElementById("p-month")
const p3 = document.getElementById("p-year")
const p = document.querySelectorAll("p")
const input = document.querySelectorAll('input')


function sbmt(){

    let date1 = new Date();
    let year1 = date1.getFullYear();
    let month1 = date1.getMonth() + 1;
    let day1 = date1.getDate();
    let int = parseInt(day.value);
    let int2 = parseInt(year.value);
    let int3 = parseInt(month.value);


      if(isNaN(int) || int > 31 || int < 1) {
        day.style.borderColor = "#ED4337"
        p1.textContent = "enter a valid day"
        b1.textContent = "- -"
    } 
     if(isNaN(int3) || int3 > 12 || int3 < 0){
        month.style.borderColor = "#ED4337"
        p2.textContent = "enter a valid month"
        b3.textContent = "- -"


    }  
     if (isNaN(int2) || int2 > 2024 || int2 < 1 || int2 < 1900) {
        year.style.borderColor = "#ED4337"
        p3.textContent = "enter a valid year"
        b3.textContent = "- -"

    } 
    else{
        let calc_year = year1 - int2;
        let calc_month = month1 - int3;
        let calc_day = day1 - int;

        b1.textContent = calc_year;
        b2.textContent = calc_month;
        b3.textContent = calc_day
    }


}

btn.addEventListener('click',function(event){
    event.preventDefault();
    sbmt()
})