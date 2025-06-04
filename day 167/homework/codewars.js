//1
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length -1]
  }

  //2
  function enough(cap, on, wait) {
  if(wait <= (cap-on)){
    return 0
  }
  return wait - (cap-on)
}

//3
function oddCount(n){
  return Math.floor(n /2)
}

//4
function unusualFive() {
  return 'hello'.length;
}