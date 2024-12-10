//1
function func(students,points){
    let arr = new Map()
    arr.set(students[0],points[0])
    arr.set(students[1],points[1])
    arr.set(students[2],points[2])
    console.log(arr)
}

func(["student1","student2","student3"],[60,90,80])

//2
function func2(arr){
    let remove = new Set(arr)
    console.log(remove)
}
func2([1,1,2,2,3,4])

//3
function func3(list){
    let copy = new Map()
    let count = 0
    for(let i of list){
        count++
        copy.set(`students${count}`,i + 5)
    }
    console.log(copy)
}
func3(new Set([100,90,80]))