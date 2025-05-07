function evenChars(string) {
    if(string.length < 2 || string.length > 100){
      return 'invalid string'
    }
    let arr = []
    for(let i =1;i<string.length;i++){
      if(i % 2 !== 0){
        arr.push(string[i])
      }
    }
    return arr
  }