def loop1():
    ret = []
    for x in range(0,9,2):
        ret.append(str(x) * 2)
    return ret

print(loop1())

def list1():
    return [str(x) * 2 for x in range(0,9,2)]

print(list1())

def loop2():
    ret = []
    for x in range(0,5):
        ret.append((x * 10) + 7)
    return ret

print(loop2())

def list2():
    return [7 + x * 10 for x in range(0,5)]

print(list2())

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

def loop4():
    ret = []
    for x in range(0, 101):
        for n in range(2, x):
            if x % n == 0:
                ret.append(x)
                break
    return ret

print(loop4())

#def list4():
    #return [x if 1 in [1 if x % n == 0 for n in range(2, x)] for x in range(0, 101)]

#print(list4())

for x in range(0,101):
    print([1 if x % n == 0 for n in range(2, x)])
