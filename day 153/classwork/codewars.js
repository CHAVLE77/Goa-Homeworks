//1
function stringToIntArray(s){
    let arr = s.split(',').filter((el)=> el !== ',' && el !== '')
    let res = []
    for(let i of arr){
        res.push(Number(i))
    }
    return res
}

//2
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

//3
function removeEveryOther(arr){
  return arr.filter((el,index)=> index % 2 ===0)
}