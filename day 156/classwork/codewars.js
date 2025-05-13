//2
function scrabbleScore(str) {
  let one = 'aeioulnrst';
  let two = 'dg';
  let three = 'bcmp';
  let four = 'fhvwy';
  let five = 'k';
  let eight = 'jx';
  let ten = 'qz';
  let res = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (one.includes(char)) res += 1;
    else if (two.includes(char)) res += 2;
    else if (three.includes(char)) res += 3;
    else if (four.includes(char)) res += 4;
    else if (five.includes(char)) res += 5;
    else if (eight.includes(char)) res += 8;
    else if (ten.includes(char)) res += 10;
  }

  return res;
}
