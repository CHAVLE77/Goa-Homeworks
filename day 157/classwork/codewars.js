function sumDigPow(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    let sum = i.toString().split('').reduce((acc, d, idx) => acc + Math.pow(+d, idx + 1), 0);
    if (sum === i) result.push(i);
  }
  return result;
}
