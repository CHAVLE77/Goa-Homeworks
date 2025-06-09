//1
function divisibleBy(numbers, divisor){
  return numbers.filter((nums)=>nums % divisor === 0)
}

//2
function moveZeros(arr) {
    let filtered = arr.filter((el)=>el !== 0)
    let zerosCount = arr.length - filtered.length
    let res = filtered.concat(new Array(zerosCount).fill(0))
    return res
}

//3
function isPangram(string){
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  
for(let i of letters){
    if(!string.toLowerCase().includes(i)){
        return false
    }
}
  return true
}
