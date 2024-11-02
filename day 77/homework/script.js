//1
function lengt(row,coll) {
    for(let i = 0;i<=row;i++) {
        for(let c =0;c <= coll;c++) {
            console.log(`rows:${i}, column:${c}`)
        }
    }
} 

lengt(4,4)

//2
let nums = [1,2,3,4,5,6,7,8,9,10]

nums.forEach(Element => {
    Element = Element * Element
    let array = [[]]
    array[0].push(Element)
    console.log(array)
})

//3
