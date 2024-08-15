

def max_multiple(divisor, bound):
    return bound - (bound % divisor)

print(max_multiple(2,7))




def switcheroo(s):
    result = ''
    for letter in s:
        if letter == "a":
             letter = "b"
        elif letter == "b":
             letter = "a"
        result = result + letter
    return result



