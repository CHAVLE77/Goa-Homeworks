//1
function solve(a,b){
  let res = ''
  for(let i =0;i<a.length;i++){
    if(!b.includes(a[i])){
      res+=a[i]
    }
  }
  for(let n =0;n<b.length;n++){
    if(!a.includes(b[n])){
      res+=b[n]
    }
  }
  return res
}

//2
function comes_after(str, l) {
  let res = '';
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].toLowerCase() === l.toLowerCase()) {
      const next = str[i + 1]
      if (/[a-zA-Z]/.test(next)) {
        res += next
      }
    }
  }
  return res;
}
