//1
function calculator(a, b, sign) {
    const operators = '-+*/%';
  
    if (typeof a !== 'number' || typeof b !== 'number' || !operators.includes(sign)) {
      return "unknown value";
    }
  
    switch (sign) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      case '%': return a % b;
      default: return "unknown value";
    }
  }

  //2
//   def kata_13_december(lst): 
//   for i in lst[:]: 
//       if i%2==0: 
//           lst.remove(i)
//   return lst

  //3
  function replace(s) {
    return s.replace(/[aeiouAEIOU]/g,'!')
  }
 