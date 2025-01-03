//1
//წერე ფუნქცია, რომელიც იღებს name და callback ფუნქციას. ფუნქცია უნდა დაიდოს setTimeout()-ში, რომ 2 წამში დაბეჭდოს მისასალმებელი მესიჯი.

function func(name,callback){
    setTimeout(()=>{
        callback('hello' + " " + name)
    },2000)
}

func('max',(result)=>{
            console.log(`final result is ${result}`)
        })




//2
//წერე ფუნქცია, რომელიც იღებს მესიჯს და callback ფუნქციას. ფუნქცია უნდა დაბეჭდოს მესიჯი 2 წამით დაგვიანებით setTimeout()-ის გამოყენებით. 
// შემდეგ callback უნდა ამოწმებდეს, რომ პროცესი დასრულდა.
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
//წერე ფუნქცია, რომელიც იღებს რიცხვების მასივსა და callback ფუნქციას. თითოეული რიცხვის კვადრატის გამოთვლა უნდა განხორციელდეს setTimeout()-ის გამოყენებით,
//  რათა იყოს რეალური დელაიდებული პროცესი, და შემდეგ უნდა დააბრუნოს ახალი მასივი.

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
//წერე ფუნქცია, რომელიც იღებს ფერს და callback ფუნქციას. setTimeout()-ის გამოყენებით უნდა ჩაიწეროს ცვლადში ფერი 2 წამში,
//  შემდეგ callback უნდა შეცვალოს ტექსტის ფერი.

function changeColor(color,callback){
    let result = ''
    setTimeout(()=>{
        result += color
        callback(document.body.style.backgroundColor = result)
    },2000)
}

changeColor('red')

        
//5
//წერე ფუნქცია, რომელიც სთხოვს მომხმარებელს მათი სახელის შეყვანას. setTimeout()-ის გამოყენებით, 
// 3 წამში უნდა გამოვიდეს ინტერაქტიული შეტყობინება, რომელიც მიულოცავს მათ, რომ დაეხმარა. 

function func(){
    let input = prompt('enter your name: ')
    setTimeout(()=>{
            alert('thanks for help')
    },3000)
}

func((result)=>{
    console.log(result)
})