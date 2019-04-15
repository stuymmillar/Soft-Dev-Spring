#Team Eam Am M - Max Millar, Joshua Weiner
#SoftDev2 pd06
#K #17: PPFTLCW
#2019-04-14

print("Problem 1 -- Double Evens")

def loop1():
    ret = []
    for x in range(0,9,2):
        ret.append(str(x) * 2)
    return ret

print(loop1())

def list1():
    return [str(x) * 2 for x in range(0,9,2)]

print(list1())

print("Problem 2 -- 7s")

def loop2():
    ret = []
    for x in range(0,5):
        ret.append((x * 10) + 7)
    return ret

print(loop2())

def list2():
    return [7 + x * 10 for x in range(0,5)]

print(list2())

print("Problem 3 -- Reproduce the list")

def loop3():
    ret = []
    for x in range(0, 9):
        if x == 4:
            ret.append(1)
        elif x == 5 or x == 7:
            ret.append(2)
        elif x == 8:
            ret.append(4)
        else:
            ret.append(0)
    return ret

print(loop3())

def list3():
    return [1 if x == 4 else 2 if x == 5 or x == 7 else 4 if x == 8 else 0 for x in range(0,9)]

print(list3())

print("Problem 4 -- Composites on [0, 100], ascending")

def loop4():
    ret = []
    for x in range(0, 101):
        for n in range(2, x):
            if x % n == 0:
                ret.append(x)
                break
    return ret

print(loop4())

def list4():
    return [x for x in range(0, 101) if 1 in [1 for n in range(2, x) if x % n == 0 ]]

print(list4())

print("Problem 5 -- Primes on [0, 100], ascending")

def loop5():
    ret = []
    for x in range(0, 101):
        for n in range(2, x + 1):
            if x==2:
                ret.append(x)
            if x % n == 0:
                break
            if n == x - 1:
                ret.append(x)
    return ret

print(loop5())

def list5():
    return [x for x in range(2, 101) if not 1 in [1 for n in range(2, x) if x % n == 0 ]]

print(list5())

print("Problem 6 -- Divisors of a number, ascending")

def loop6(num):
    ret = []
    for x in range(1, num + 1):
        if num % x == 0:
            ret.append(x)
    return ret

def list6(num):
    return [x for x in range(1, num + 1) if num % x == 0]

print(list6(3))
print(list6(20))
print(list6(345))

print("Problem 7 -- Transpose Matrix")

test_matrix = ['S', 'W'] , ['p', 'o'] , ['e', 'r'] , ['l', 'd'] , ['l', 's']

def loop7(matrix):
    ret=[]
    for x in range(0, len(matrix[0]) ):
        newrow=[]
        for row in matrix:
            newrow.append(row[x])
        ret.append(newrow)
    return ret

print(test_matrix)
print("Using loop --> ")
print(loop7(test_matrix))

def list7(matrix):
    return [[row[x] for row in matrix] for x in range(len(matrix[0]))]

print(test_matrix)
print("Using list comprehension --> ")
print(list7(test_matrix))
