#1
def sum_digits(n):
    result = 0
    while n > 0:
        result += n % 10  
        n //= 10  
    return result

print(sum_digits(153))  


def sum_digits(n):
    result = 0
    if n < 0:
        n = -n
        
    while n > 0:
        result += n % 10  
        n //= 10  
    return result
    

print(sum_digits(-153))  


#2
def sum_two_largest(lst):
    if len(lst) < 2:
        return None
        
    max1 = max(lst)
    lst.remove(max1)
    max2 = max(lst)
    lst.remove(max2)
    return max1 + max2

print(sum_two_largest([3, 7, 10, 9, 8]))