//1
function position(letter){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let calc = alphabet.indexOf(letter) + 1
  return `Position of alphabet: ${calc}`;
}
//2
function dutyFree(normPrice, discount, hol){
  let perBottle = normPrice * discount / 100
  let bottles = hol / perBottle
  return Math.floor(bottles)
}
//3
function correctTail(bod, tail){
  
  let sub = bod.substr(bod.length-(tail.length))
  
  if (sub === tail) {
    return true
  }
    return false

  }