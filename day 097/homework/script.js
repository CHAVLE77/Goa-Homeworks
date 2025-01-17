//1
function task1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('task1 completed')
        },2000)
    })
}

task1().then(result => console.log(result))

//2
function task2(){
    return new Promise((resolve,reject)=>{
        reject('task2 failed')
    })
}

task2().then(result => console.log(result)).catch(result => console.log(result))

//3
function task3(){
    return new Promise((resolve,reject)=>{
        resolve(5)
    })
}

task3().then(result => result * 2).then(result => console.log(result))

//4
function task4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('first')
        },2000)
    })
}

task4().then(result => {console.log(result);
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('second')
    },1000)
})
}).then(result => {console.log(result)})


//5
function task5(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('task5 failed')
        },2000)
    })
}

task5().then(result => console.log(result)).catch(result => console.log(result))

//6
function task6(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('task6 complete')
        },Math.floor(Math.random()* 5000) + 1000)
    })
}

task6().then(result => console.log(result))


//7
function task7(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('first')
        },Math.floor(Math.random()* 3000) + 1000)
    })
}

task7().then(result => {console.log(result);
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('second')
    },Math.floor(Math.random() * 3000)+1000)
})
}).then(result => console.log(result))

//8
function task8(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('task8 failed')
        },Math.floor(Math.random()* 4000) + 1000)
    })
}

task8().then(result => console.log(result)).catch(result => console.log(result))

//9
function task9(){
    return new Promise((resolve,reject)=>{
        let randomize = Math.floor(Math.random() * 5000) + 1000
        if(randomize > 500){
            reject('task9 was quick')
        }else{
        setTimeout(()=>{
            resolve('task9 complete')
        },randomize)
        }
    })
}

task9().then(result => console.log(result)).catch(result => console.log(result))

//10
function task10(){
    return new Promise((resolve,reject)=>{
        let randomize = Math.floor(Math.random() * 4000) + 1000
        if(randomize < 300){
            reject('error')
        }else{
        setTimeout(()=>{
            resolve('task10 complete')
        },randomize)
        }
    })
}

task10().then(result => console.log(result)).catch(result => console.log(result))
