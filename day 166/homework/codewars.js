//1
function divisibleBy(numbers, divisor){
  return numbers.filter((nums)=>nums % divisor === 0)
}

//2
function stringy(size) {
  let res = ''
  for(let i =0;i<size;i++){
    res+=i % 2 === 0 ? '1' : '0'
  }
  return res
}

//3
function check(n){
  let str = n.toString()
  return str === str.split('').reverse().join('')
}

var palindromeChainLength = function(n) {
      let steps = 0
    while(!check(n)){
      let reversed = Number(n.toString().split('').reverse().join(''))
      n+=reversed
      steps++
    }
      return steps
  };
