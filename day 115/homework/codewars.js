//2
function findShort(s){
    let splited = s.split(' ')
    let first = splited[0]
    for(let i =0;i<splited.length;i++){
      if(first.length > splited[i].length){
        first = splited[i]
      }
    }
    return first.length
  }

//3
function findLongest(array){
    let max = Math.max(...array)
    for(let i =0;i<array.length;i++){
        if(array[i].toString().length === max.toString().length){
            return array[i]
        }
    }
}


