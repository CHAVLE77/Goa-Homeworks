//1
function similarity(a, b) {
    let res = a
    let common = []
    for(let i =0;i<b.length;i++){
      if(a.includes(b[i])){
            common.push(b[i])
        }
      if(!a.includes(b[i])){
            res.push(b[i])
        }
    }  
     let final = common.length / res.length
     return final
  }