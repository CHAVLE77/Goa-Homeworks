function nbYear(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 += Math.floor(p0 * (percent / 100)) + aug; 
        years++;
    }
    return years;
}

function areYouPlayingBanjo(name) {
    if(name[0] === "R" || name[0] === 'r'){
      return    `${name} plays banjo`
    }else{
      return `${name} does not play banjo`
    }
  }

function smash (words) {
    return words.join(' ')
 };


 function divisors(integer) {
    let res = []
    if(integer <= 1){
      return `${integer} is prime`
    }
    for(let i =2;i<integer;i++){
      if(integer % i === 0){
        res.push(i)
      }
    }
    if (res.length === 0) {
      return `${integer} is prime`; 
    }
    return res
  }

  function dontGiveMeFive(start, end){
    let res = []
    for(let i = start;i<=end;i++){
      res.push(i)
    }
   let result = res.filter((el) => !el.toString().includes(5))
   return result.length
  }

  function arithmetic(a, b, operator){
    switch(operator){
      case "add":
        return a + b
        break
      case "subtract":
        return a - b
        break
      case "multiply":
        return a * b
        break
      case "divide":
        return a / b
    }
  }