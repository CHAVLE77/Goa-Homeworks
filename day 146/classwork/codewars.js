function sum(...args) {
    let total = 0;
    for (let num of args) {
      total += num;
    }
    return total;
  }

  function sumDigits(number) {
    let res = 0
    if(number<0){
      number = -number
    }
    let str = number.toString()
    for(let i =0;i<str.length;i++){
      res+=Number(str[i])
    }
    return res
  }
  