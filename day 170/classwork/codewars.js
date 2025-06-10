//1
function isPangram(string){
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  
for(let i of letters){
    if(!string.toLowerCase().includes(i)){
        return false
    }
}
  return true
}

//2
const cannonsReady = (gunners) => {
  for (let i in gunners) {
    if (gunners[i]!== 'aye') {
      return 'Shiver me timbers!'
    }
  }
  return 'Fire!'
}

//3
function animals(heads, legs){
  if(heads < 0 || legs < 0 || legs % 2 !== 0){
    return "No solutions"
  }
  let sumLegs = heads * 2
  let half = legs / 2
  let minus = sumLegs - half
  let res = heads - minus
  if (res < 0 || minus < 0 || !Number.isInteger(res)) {
    return "No solutions"
  }
  return [minus,res]
}