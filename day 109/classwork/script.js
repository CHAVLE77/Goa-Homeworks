function maskify(cc) {
  let result = ''
  for(let i = 0;i<cc.length;i++){
    if(i < cc.length-4){
      result += '#'
    }else{
      result += cc[i]
    }
  }
  return result
}