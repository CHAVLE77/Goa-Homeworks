function multiTable(number) {
    let result = ''
    for(let i = 1;10 >= i;i++){
      result += `${i} * ${number} = ${i * number}\n`
    }
    return result.trim()
  }

  let arr = [1,2,2,3,3,4,4,5]
  let result = []
  for(let i = 0;i<arr.length;i++){
    for(let n = 0;n<result.length;n++){
      if(!n.includes(i)){
        result.push(i)
      }
    }
    console.log(result)
  }

  