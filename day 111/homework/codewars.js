function speedify(s) {
    let out=Array(s.length+26).fill(' ');
    [...s].forEach((c,i)=>out[i+c.charCodeAt()-65]=c);
    return out.join('').trimEnd();
  }