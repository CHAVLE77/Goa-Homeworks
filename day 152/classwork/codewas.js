//1
function invertHash(hash) {
    let res = {}
  for(let i in hash){
      res[hash[i]] = i 
  }
    return res
  }

  //2
  function age(x, y){
    return x * y / (y - 1);
  }

  //4
  function getASCII(c){
    return c.charCodeAt(0);
  }