age = int(input("Enter your age: "))

if age >= 0 and age < 13:
    print("youre a child")
elif age >= 13 and age < 18:
    print("youre a teenager")
elif age >= 18 and age < 60:
    print("youre an adult")
else:
    print("elderly")
    