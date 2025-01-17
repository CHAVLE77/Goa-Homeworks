function calculate(list1,list2) {
    let result = []
    for(let i = 0;i < list1.length;i++){
        for(let n = 0;n < list2[i].length;n++){
            let sum = list1[i][n] + list2[i][n]
            let final = []
            final.push(sum)
            result.push(final)
            console.log(result)
        }
    }
}

calculate([[1,3],[1,4]], [[4,1],[2,2]])

//3
function func(list) {    
    let first = list[0][0] + list[1][1] + list[2][2]
    let second = list[0][2] + list[1][1] + list[2][0]
    console.log(first,second)
}
func([[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]])