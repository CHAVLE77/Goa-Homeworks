//1
function unification(map1){
    let newMap = new Set([1,2])
    for(let i of map1){
        for(let n of newMap){
            if(n !== i){
                newMap.add(i)
            }
        }
    }
    console.log(newMap)
}
unification([2,3,4])

//2
function func(set1,set2){
    let result = new Set()
    
    for(let i of set1){
        if(!set2.has(i)){
            result.add(i)
        }
    }
        
        for(let n of set2){
            if(!set1.has(n)){
                result.add(n)
            }
        }
        console.log(result)
}

//3
func(new Set([1,2,3]),new Set([3,4,5]))


function check(arr1,arr2){
    for(let i of arr1){
        for(let n of arr2){
            if(n === 1){
                console.log(true)
                break
            } else{
                console.log(false)
            }
        }
    }
}
check(new Set([1,2]),new Set([1,2,3]))

//5
function change(map1) {
    let newMap1 = new Map();
    for (let [key, value] of map1) { 
        newMap1.set(value, key); 
    }
    console.log(newMap1); 
}

change(new Map([['a', 1], ['b', 2], ['c', 1]]));



