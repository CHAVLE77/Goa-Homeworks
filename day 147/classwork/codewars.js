const matrixfy = str => {
    if(str.length === 0){
      return "name must be at least one letter"
    }
    let n = Math.ceil(Math.sqrt(str.length))
    let full = n * n
    let arr = []
    for(let i = 0;i<n;i++){
        let row = []
        for(let j = 0;j<n;j++){
            row.push(str[i * n + j] || '.')
        }
        arr.push(row)
    }
    return arr
  };