//1
function sum(list1,list2) {
    let result = [[],[]]
    let sum1 = list1[0][0] + list1[0][1]
    let sum2 = list1[1][0] + list1[1][1]
    let sum3 = list2[0][0] + list2[0][1]
    let sum4 = list2[1][0] + list2[1][1]
    result[0].push(sum1,sum2)
    result[1].push(sum3,sum4)
    console.log(result)

}

sum([[1,3],[1,4]], [[4,1],[2,2]])

//3
function func(list) {    
    let first = list[0][0] + list[1][1] + list[2][2]
    let second = list[0][2] + list[1][1] + list[2][0]
    console.log(first,second)
}
func([[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]])