function generatePairs(n) {
  let res = []
  for(let a =0;a<=n;a++){
    for(let b = 0;b<=n;b++){
      if(a<=b && b<=n){
        res.push([a,b])
      }
    }
  }
  return res
}