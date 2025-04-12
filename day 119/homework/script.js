//1
function studentsGrades(list){
    let list2 = list.map((el)=> el.split(':')[0])
    list = list.map((el)=> el.split(':')[1])
    let map1 = new Map()
    map1.set(list2,list)
    console.log(map1)
}
studentsGrades(['george:50','sam:30','max:80'])

//2
function removeDuplicate(list){
    let res = []
    for(let i =0;i<list.length;i++){
        if(!res.includes(list[i])){
            res.push(list[i])
        }
    }
    console.log(res)
}
removeDuplicate([1,1,1,2,2,3,4])

//3
function copyMap(map1){
    console.log(map1.map((el)=>el+5))
}
copyMap([50,100,80,90])