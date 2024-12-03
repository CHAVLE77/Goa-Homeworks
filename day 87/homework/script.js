const countrys = new Map([
    ["georgia","tbilisi"],
    ["germany","berlin"],
    ["france","paris"]
]);

let country = "georgia"


if(countrys.has(country)){
    console.log(country)
}

const students = new Map([
    ["student1",60],
    ["student2",70],
    ["student3",90]
]);

console.log(students.get("student1"))

const key = new Map([
    ["key1","value1"],
    ["key2","value2"],
    ["key3","value3"]
]);


key.forEach(() => {
    console.log(key.keys())
})


const Delete = new Map([
    ["key1","value1"],
    ["key2","value2"],
    ["key3","value3"]
]);

Delete.delete("key1")

console.log(Delete)


const add = new Map([
    ["key1","value1"],
    ["key2","value2"],
    ["key3","value3"]
]);

add.set("key4")

console.log(add.size)


const change = new Map([
    ["key1","value"],
    ["key2","value2"],
    ["key3","value3"]
]);

change.set("key4","value4")
change.set("key1","value1")

console.log(change)

const check = new Map([

]);

if(check.size === 0){
    check.set("key1","value1")
}

console.log(check)

const obj = {
    name:"product",
    price:150
}

const maps = new Map(Object.entries(obj))

console.log(maps)




const cleared = new Map([
    ['key1','value1'],
    ['key2','value2']
])

cleared.clear()

if(cleared.size === 0){
    console.log(cleared)
}