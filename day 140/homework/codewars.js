//7kyu
function getCount(str) {
    let vowel = ['a','e','i','o','u']
    let res = 0
    for(let i of str){
      if(vowel.includes(i)){
        res++
      }
    }
    return res
  }

  //7kyu
  function calcType(a, b, res) {
    if(a - b === res){
      return 'subtraction'
    }else if(a + b === res){
      return 'addition'
    }else if(a * b === res){
      return 'multiplication'
    }else if(a / b === res){
      return 'division'
    }
  }

  //7kyu
  String.prototype.vowel = function() {
    let vowel = 'aeiouAEIOU'
    return vowel.includes(this) && this.length === 1 ? true : false
  };


  //6kyu
  function createPhoneNumber(numbers){
    let num = numbers.slice(0,3)
    let num2= numbers.slice(3,6)
    let num3= numbers.slice(6,10)
    
    return `(${num.join('')}) ${num2.join('')}-${num3.join('')}`
  }