
# 1
def how_many_dalmatians(n):
  dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
  if n <= 10:
    return dogs[0] 
  elif n <= 50:
    return dogs[1]
  elif n == 101:
    return dogs[3]
  else:
    return dogs[2]


# 2
def correct(s):
    s = s.replace("5","S")
    s = s.replace("0","O")
    s = s.replace("1","I")
    return s

print(correct("50ul1"))


# 3
def max_diff(lst):
    if len(lst) <=1:
        return 0
    else:
        maxi = max(lst)
        mini = min(lst)
        
    return maxi - mini



def persistence(n):
    for i in n:
        mult = int(i) * int(i)
    return mult
    
print(persistence("14"))

def multiply_digits(number):
    num_str = str(number)
    result = 1
    for char in num_str:
        digit = int(char)
        result *= digit
    return result

print(multiply_digits(36))

