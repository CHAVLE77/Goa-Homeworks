//1
String.prototype.isLetter = function() {
    return /^[a-zA-Z]$/.test(this);
};

//2
function countZeros(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
      let number = i;
      
      while (number > 0) {
        if (number % 10 === 0) {
          count++;
        }
        number = Math.floor(number / 10);
      }
    }
    
    return count;
  }



//3
function countRedBeads(n) {
    return n === 0 || n === 1 ? 0 : (n * 2)  -2 
  }