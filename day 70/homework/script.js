
//1
const arr = [1,2,3,4,5]

arr.forEach(element => {
    console.log(element)
});

//2
const arr2 = [1,2,3,4,5]
let arr_sum = 0

arr2.forEach(sum =>{
arr_sum += sum
console.log(arr_sum)
})

//3
const names = ["giorgi","nika","luka"]
console.log(`chemi saxeli aris ${names[1]}`)

//4
const int = [1,2,3,4,5]
let double = 2
int.forEach(mult => {
    let result = double * mult
    console.log(result)
})

//5
const arr3 = [1,2,3,4,5]
let result = 0
const new1 = arr3.map(nums => {
    result=nums ** nums
    return new1
})
console.log(new1)

//6
const str = ["str1","string2","sttrr"]
let resultt = ""
const lenght = str.map(element => {
    result= element.length
    return resultt
})
console.log(lenght)


//7
let str2 = ["name1","name2","name3"]
let final = ""
const upper = str2.map(to =>{
    final = to.toUpperCase()
    return final
})
console.log(upper)



//8
const list1 = [1,2,3,4,5,6,7,8,9,10]

const filtered = list1.filter(even => {
    if(even % 2 === 0) {
        return even
    }
})
console.log(filtered)

//9
const list2 = ["first","second","three"]

const final2 = list2.filter(filt => {
    if(filt.length > 5 ){
    return filt
    }
})
console.log(final2)

//10
const numbers = [1,-4,5,-10,-2,8]

const filtered2 = numbers.filter(positive => {
    if(positive > 0){
        return positive
    }
})
console.log(filtered2)