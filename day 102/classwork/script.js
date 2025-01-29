function task1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('check task')
        },1000)
    })
}

task1().then(res => {console.log(res);
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('task1 completed')
    },1000)
})
}).then(res => {console.log(res);
    return new Promise((resolve,reject)=>{
        let randomize = Math.floor(Math.random * 3000) + 1000
        setTimeout(()=>{
            if(randomize > 500){
                resolve('task1 completed')
            }
            reject('we failed')
        },randomize)
    })
}).then(res => console.log(res)).catch(res => console.log(res))