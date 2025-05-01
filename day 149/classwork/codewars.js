function capMe(names) {
    let str = []
  names.forEach((el)=>{
      str.push(el[0].toUpperCase() + el.slice(1).toLowerCase())
  })
  return str
}


const arrCheck = value =>
    value.every(el => Array.isArray(el));
    