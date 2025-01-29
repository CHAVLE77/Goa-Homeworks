//1
function findNextSquare(sq) {
    let root =  Math.sqrt(sq)
       if(Number.isInteger(root)){
           return (root + 1) ** 2
       }
       
       return -1
   }

//2
function solution(str, ending){
    let lenght = ending.length
    let result = str.slice(-lenght)
    
    if(result === ending){
        return true
    } else if(ending.length === 0) {
        return true
    }
    return false
}