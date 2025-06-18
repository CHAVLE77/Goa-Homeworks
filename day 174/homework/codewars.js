//2
function findArray(arr1, arr2){
  if(arr1.length === 0){
    return []
  }
  let res = []
    for(let n =0;n<arr2.length;n++){
      res.push(arr1[arr2[n]])
    }
  return res
}

//3
function lettersToNumbers(s) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (ch >= 'a' && ch <= 'z') {
      res += letters.indexOf(ch) + 1;
    } else if (ch >= 'A' && ch <= 'Z') {
      res += (letters.indexOf(ch.toLowerCase()) + 1) * 2;
    } else if (ch >= '0' && ch <= '9') {
      res += Number(ch);
    }
  }

  return res;
}
