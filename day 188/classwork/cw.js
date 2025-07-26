//2
function uniqueSum(lst){
  if(lst.length === 0){
    return null
  }
  let count = 0
  let res = []
  for(let i =0;i<lst.length;i++){
    if(!res.includes(lst[i])){
      res.push(lst[i])
    }
  }
  for(let n = 0 ;n<res.length;n++){
    count+=res[n]
  }
  return count
}