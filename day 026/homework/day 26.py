name =input("enter your name: ")

print(name.capitalize(),name.lower(),name.upper())



def find_index(string, find_letter):
    result = string.find(find_letter)
    return result


def len_func(word):

    result = len(word)

    print(result)

len_func(["hello"])


list1 = ["apple","orange"]
list2 = list1.append("banana")

print(list1)      #გამოვიყენე append ფუნქცია რითიც სიაში დავამატე კიდევ ერთი ელემენტი



any_list = ["apple","banana","orange"]

full_list = any_list.pop(1)

print(any_list)   # გამოვიყენე pop ფუნქცია რითიც ამოვიღე კონკრეტულ ინდექსზე მყოფი ელემენტი სიიდან


list1 = ["goa","novatori","itstep"]

list2 = list1.insert(2,"reschool")

print(list1)      #გამოვიყენე insert ფუნქცია რითიც დავამატე ელემენტი კონკრეტულ ინდექსზე


word = "hello"

print(len(word))  # გამოვიყენე len ფუნქცია რითიც გავიგე კონკრეტული მნიშვნელობის ზომა
