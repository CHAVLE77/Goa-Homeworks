//1
function isQvenakrebi(lst,lst2) {
    for(let i of lst){
        if(lst2.includes(i)){
            return true
        }
    }
    return false
}
console.log(isQvenakrebi([1,2],[1,2,3]))


//2
function reverseMap(map1){
    let resMap = new Map()
    for(let i of map1){
        resMap.set(i[1],i[0])
    }
    return resMap
}
console.log(reverseMap(new Map([['a', 1], ['b', 2], ['c', 1]])))

//3
function maxValue(map1){
    let max = -Infinity
    let res = []
    for(let [key,value]of map1){
        if(value > max){
            max=value
            res = [key]
        }else if(value === max){
            res.push(key)
        }
    }
    return res
}
console.log(maxValue(new Map([['a', 5], ['b', 15], ['c', 15]])))