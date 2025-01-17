1
any_list = [0.4,4,5,"hello"]
int_sum = []

for i in any_list:
  if isinstance(i, int):
    int_sum.append(i)
    result = sum(int_sum)

print(result)




num_list = [1,2,1.4,5.6,7]

min_num = min(num_list)
max_num = max(num_list)
remove_min = num_list.remove(min(num_list))
remove_max = num_list.remove(max(num_list))
new_list = []
for i in num_list:

 new_list2 = new_list.append(i)
result = sum(new_list)
print(result)



word = input("please enter any word: ")

for i in word:
    if  word.islower() or word.isupper():

         up= word.upper()
         low = word.lower()
             
print(low,up)
