function manualFilter(func,arr) {
    let result = []
    arr.foreach(function(i){
        if (func(i) === true){
            result.push(i)
        } 
    })

    return result
}



let sqr = Math.sqrt(4);
console.log(sqr)
let sqr2 = Math.sqrt(18);
console.log(sqr2)
let sqr3 = Math.sqrt(25);
console.log(sqr3)
let sqr4 = Math.sqrt(36); 
console.log(sqr4)
let sqr5 = Math.sqrt(81);
console.log(sqr5)//sqrt გვაძლევს რიცხვის კვადრატულ ფესვს

let test = Math.ceil(4.1);
console.log(test)
let test2 = Math.ceil(6.12);
console.log(test2)
let test3 = Math.ceil(5.5);
console.log(test3)
let test4 = Math.ceil(1.6);
console.log(test4)
let test5 = Math.ceil(7.8); 
console.log(test5) // ceil ამრგვალებს რიცხვს ზევით 



const interval = setInterval(function() {
    const info2 = new Date();
    const min = info2.getMinutes();
    if(min === "35"){
        clearInterval(interval)
    }
},1000)

let count = 0 
const interval1 = setInterval(function(){
    count++
    let date = `${count}`
    if(date === "35"){
        clearInterval(interval1)
    }
},60000)


let info =new Date();
let day = info.getDay();
let hours = info.getHours();
let min = info.getMinutes();
let sec = info.getSeconds();
let year = info.getFullYear();
let month = info.getMonth();

console.log(day)
console.log(hours)
console.log(min)
console.log(sec)
console.log(year)
console.log(month)
