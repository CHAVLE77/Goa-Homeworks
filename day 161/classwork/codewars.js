//1
function countPositivesSumNegatives(input) {
  let count = 0
  let res = 0
  if(!input || input.length === 0){
    return []
  }
  for(let i=0;i<input.length;i++){
    if(input[i] > 0){
      count++
    }else{
      res+=input[i]
    }
  }
 return [count,res]
}

//2
function capMe(names) {
    let str = []
  names.forEach((el)=>{
      str.push(el[0].toUpperCase() + el.slice(1).toLowerCase())
  })
  return str
}