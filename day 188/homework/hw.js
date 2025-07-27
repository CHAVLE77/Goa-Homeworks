//1
function disemvowel(str) {
  let vowel = ['a','e','i','o','u']
  return str.split('').filter((el)=> !vowel.includes(el.toLowerCase())).join('')
}

//2
var number = function(busStops){
    let sum = 0
  for(let i = 0 ;i<busStops.length;i++){
       sum+=busStops[i][0] - busStops[i][1]
  }
  return sum
}

//3
function getSum(a, b) {
  if(a === b){
    return a
  }
  let max = Math.max(a,b)
  let min = Math.min(a,b)
  let sum =0
  for(let i = min;i<=max;i++){
    sum+=i
  }
  return sum
}

//4
function duplicateCount(text){
  let sorted = text.toUpperCase().split('').sort()
  let res = []
  
  for(let i =0;i<sorted.length;i++){
    if(sorted[i] === sorted[i + 1] && !res.includes(sorted[i])){
      res.push(sorted[i])
    }
  }
  return res.length
}

//5
function toCamelCase(str){
    let arr = str.split('')
    for(let i =0;i<str.length;i++){
        if(arr[i] === '-' || arr[i] ==='_'){
            arr[i+1] = arr[i+1].toUpperCase()
            arr[i]=''
        }
    }
    return arr.join('')
}