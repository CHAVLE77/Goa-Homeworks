//4
const binaryArrayToNumber = arr => {
  let decimal = 0;
  const length = arr.length;
  
  for (let i = 0; i < length; i++) {
    if (arr[length - 1 - i] === 1) {
      decimal += Math.pow(2, i);
    }
  }
  
  return decimal;
};

//5
function printerError(s) {
  const errors = s.split('').filter(c => c < 'a' || c > 'm').length;
  
  return `${errors}/${s.length}`;
}
