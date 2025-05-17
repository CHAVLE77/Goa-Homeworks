//1
function solution(string) {
  let result = '';
  for (let char of string)
    if (char >= 'A' && char <= 'Z') {
      result += ' ' + char;
    } else {
      result += char;
    }
    return result
  }