let ask = prompt("enter number: ")
let result = []
for(let i = 0;i<ask;i++){
    let mult = prompt(`${i + 1} enter number: `)
    if(mult % 2 !== 0){
        result.push(mult)
        console.log(result)
    }

}

let ask2 = prompt("enter number: ")
let result2 = []
for(let i = 0;i<ask;i++){
    let mult = prompt(`${i + 1} enter number:` )
    result2.push(mult)
    let reversed =[]
    for(let n = result2.length - 1; n>=0;n--){
        reversed.push(result2[n])
        console.log(reversed)
    }
}

//codewars1
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length -1]
    }

//cw2
function stringToArray(string){
    return string.split(" ")
}

//cw3
const areaOrPerimeter = function(l , w) {
    if(l ==w){
      return l*w
    } else{
      return l*2 + w*2
    }
  };