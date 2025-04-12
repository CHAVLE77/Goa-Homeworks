function sortIt(str, n) {
  const words = str.split(', ').sort((a, b) => {
    const letterA = a[n - 1].toLowerCase();
    const letterB = b[n - 1].toLowerCase();

    if (letterA === letterB) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    } else {
      return letterA.localeCompare(letterB);
    }
  });
  
  return words.join(', ');
}

console.log(sortIt('bid, zag', 2));


//2
function digitDegree(n) {
    let degree = 0;
  
    while (n >= 10) {
      n = n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
      degree++;
    }
  
    return degree;
  }
  
  console.log(digitDegree(91)); 
  