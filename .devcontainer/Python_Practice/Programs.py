"""n = int(input("Enter the range: "))

while n>=0:
    print(n)
    n = n-1 """

"""n = int(input('Enter the number: '))

fact =1

for i in range(1,n+1):
    fact = fact*i
print('The factorial of ', n, ' is : ',fact)"""


#factors of a number


n = 125
list =[]

for i in range(1,n+1):
    if n%i ==0:
        list.append(i)
print(list)