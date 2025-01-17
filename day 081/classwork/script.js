function smaller(nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          count++;
        }
      }
      
      result.push(count);
    }
    
    return result;
  }
  
  console.log(smaller([9, 4, 10, 3, 4]));  
  
  
  
    }
  
    return result
  
  }
  
  smaller([9,4,10,3,4])


//py
  def to_alternating_case(string):
    result = ''
    for i in string:
        if i.isupper():
            result += i.lower()  
        elif i.islower():
            result += i.upper() 
        else:
            result += i  
    return result