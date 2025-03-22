const comfortableWord = word => {
    let left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b']
      const right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];

for(let i =0;i<word.length;i++){
    if(left.includes(word[i]) && left.includes(word[i + 1])){
        return false
    }
  if(right.includes(word[i]) && right.includes(word[i + 1])){
    return false
  }
}
  return true
};