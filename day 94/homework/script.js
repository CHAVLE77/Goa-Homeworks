//1
function func(name,callback){
    setTimeout(()=>{
        callback('hello' + " " + name)
    },2000)
}

func('max',(result)=>{
            console.log(`final result is ${result}`)
        })




//2
func('max',(result)=>{
            console.log(`final result is ${result}`)
        })


        function func(name,callback){
            setTimeout(()=>{
                console.log('step1 start')
                callback('step1' + " " + name)
            },2000)
        }
        
        function func2(name,callback){
            setTimeout(()=>{
                console.log('step2 start')
                callback('step2' + " " + name)
            },2000)
        }
            
        function func3(name,callback){
            setTimeout(()=>{
                console.log('step3 start')
                callback('step3' + " " + name)
            },2000)
        }   
        
        func('end',(result)=>{
            func2(result,(result2)=>{
                func3(result2,(finalResult)=>{
                    console.log(`final result is ${finalResult}`)
                })
            })
        })



//3     
function func(arr,callback){
    setTimeout(()=>{
        for(let i of arr){
            callback(i * i)        }
    },1000)
}

func([1,2,3,4,5],(final)=>{
            console.log(`final result is ${final}`)
        })





//4
function changeColor(color,callback){
    let result = ''
    setTimeout(()=>{
        result += color
        callback(document.body.style.backgroundColor = result)
    },2000)
}

changeColor('red')

        
//5
function func(){
    let input = prompt('enter your name: ')
    setTimeout(()=>{
            alert('thanks for help')
    },3000)
}

func((result)=>{
    console.log(result)
})