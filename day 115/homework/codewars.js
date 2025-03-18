// 1
function likes(names) {
    if (names.length === 0){
      return 'no one likes this'
    }else if(names.length === 1){
      return `${names[0]} likes this`
    }else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    }else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }

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