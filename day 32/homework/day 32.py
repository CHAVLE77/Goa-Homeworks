def my_func(num_list):
    min2 = num_list[0]
    min_num = []
    for i in num_list:
        if str(i) < str(min2):
            min_num.append(i)
            return min_num 
        
print(my_func([1,2,3,4,5,6,0,8]))



