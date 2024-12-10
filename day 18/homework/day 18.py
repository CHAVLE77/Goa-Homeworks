name = input("please enter your name: ")
name2 = input("please enter your name: ")
lowercase = name2.lower()

for i in name:
    if name == lowercase:
        print(True)
    else:
        pass



real_name = "NIKA"

for i in real_name:
    if len(real_name) > 5:
         print(real_name.upper())
    else:
         print(real_name.lower())







full_name = ["nika","chavleishvili"]

name = full_name[0].capitalize()
surname = full_name[1].capitalize()
print(name,surname)

