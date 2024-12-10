def add(num1, num2):
    print(num1 + num2)

def subtract(num1, num2):
    print(num1 - num2)

def multiply(num1, num2):
    print(num1 * num2)

def divide(num1, num2):
    print(num1 / num2)


add(1,2)
subtract(1,2)
multiply(1,2)
divide(1,2)





def my_sum_func(numbers_list): 
    sum = 0
    
    for i in numbers_list:
        sum = sum + i
    
    print(sum)

my_sum_func([1,2,3,4,5])





def find_min_max(numbers_list):
    min = numbers_list[0]
    max = numbers_list[0]
    
    for i in numbers_list:
        if min > i:
            min = i
        if max < i:
            max = i
    
    print(min,max)

find_min_max([1,2,3,4,5])








def num(num_list):
    
    sum(num_list)
    return num_list

num([1,2,3,4])