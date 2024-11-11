//1
function bubble(nums) {
    for (let i = 0; i < nums.length - 1; i++) { 
        for (let j = 0; j < nums.length - 1 - i; j++) {  
            if (nums[j] > nums[j + 1]) {  
                let result = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = result;
                console.log(nums);
            }
        }
    }
}

bubble([5, 9, 1, 2, 6, 0]);

//2
function check(nums) {
    let count = 0
    let result =[]
    for (let i of nums){
        if(i % 2 !== 0){
            count++
        }
        result+=count
        console.log(result)
    }
}

check([1,2,3,4])

//3
function myfunc(n,nums) {
    let result =[]
    
    if(nums.length > n){
        console.log('Write as many numbers as n')
        return
    } 
    
    for(let i of nums){
        if(i % 3 === 0 && i % 6 !== 0 || i % 5 === 0 && i % 10 !== 0){
            result.push(i)
        }
        console.log(result)
    }
    
}
myfunc(5,[3,25,18,50,5,9])


