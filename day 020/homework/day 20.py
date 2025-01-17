def numbers(num_list):

   arithmetic_average = sum(num_list)/len(num_list)
   print(arithmetic_average)    

numbers([1,2,3,4,5])



num_list = [1, 3, -4, 5, -6]
negative_numbers = []
positive_numbers = []

for i in num_list:
    if i > 0:
        positive_numbers.append(i)
else:
    negative_numbers.append(i)

print(positive_numbers,negative_numbers)