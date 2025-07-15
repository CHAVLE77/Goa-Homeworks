//1
function findStrangeValue() {
  return NaN
}

//2
function perimeter(n) {
    const sequence = []
    let a = 1, b = 1
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sequence.push(a);
        [a, b] = [b, a + b]
    }
    for(let j =0;j<sequence.length;j++){
      sum+=sequence[j]
    }
  return 4 * sum
}


