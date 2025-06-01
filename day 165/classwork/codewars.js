//1
function whoseMove(lastPlayer, win) {
  if(win){
    return lastPlayer
  }
  return lastPlayer === 'black' ? 'white' : 'black'
}

//2
function isPythagoreanTriple([a, b, c]) {
  const sides = [a, b, c].sort((x, y) => x - y)
  return sides[0]**2 + sides[1]**2 === sides[2]**2
}

//3
function isValid(formula) {

  return !(formula.includes(1) && formula.includes(2)) &&!
    (formula.includes(3) && formula.includes(4)) &&
         (formula.includes(5) === formula.includes(6)) &&
         (formula.includes(7) || formula.includes(8));
}