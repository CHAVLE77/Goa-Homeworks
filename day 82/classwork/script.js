let arr = [{
    first:1,
    second:2,
    third:3,
    fourth:4
}]

for(let i of arr){
    console.log(i.first)
    console.log(i.second)
    console.log(i.third)
    console.log(i.fourth)

}

let arr2 = [{
    first:1,
    second:2,
    third:3,
    fourth:4
}]

for (let i of arr2) {
    for(let n in i){
        console.log(i[n])
    }
}