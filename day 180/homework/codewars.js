//1
function sumSquares(array) {
  return array.reduce((sum,num)=>sum + num ** 2,0)
}

//2
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}

//4
function nextItem(xs, item) {
  let found = false;
  let prev = undefined;

  for (const elem of xs) {
    if (found) {
      return elem;
    }
    if (elem === item) {
      found = true;
    }
  }

  return undefined;
}
