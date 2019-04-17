def qs(l):
    #print(l)
    if len(l) <= 1:
        return l
    return qs([l[x] for x in range(len(l)) if l[x] <= l[len(l) - 1] and x != len(l) - 1]) + [l[len(l) - 1]] + qs([l[x] for x in range(len(l)) if l[x] > l[len(l) - 1] and x != len(l) - 1])


l = [6,4,9,2,4,18,27,101,5,3,1,7,8,23,5,3,1,6,34,7,5]
print(qs(l))
