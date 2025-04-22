//1
function nameShuffler(str){
    let [first, last] = str.split(" ");
    return `${last} ${first}`;
  }

  //2
  function getRealFloor(n) {
    if (n <= 0){
      return n
    } 
   if (n < 13){
     return n - 1
   } 
     return n - 2
 }

 //3
 function xor(a, b) {
    return a !== b
  }

  //4
  function position(letter){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let calc = alphabet.indexOf(letter) + 1
    return `Position of alphabet: ${calc}`;
  }

  //5
  function getChar(c){
    return String.fromCharCode(c)
  }

  //6
  function pipeFix(numbers){
    let start = numbers[0]
    let end = numbers[numbers.length - 1]
    let res = []
    
    for(let i = start;i<=end;i++){
      res.push(i)
    }
    return res
  }

  //7
  function unusualFive() {
    return 'hello'.length;
  }