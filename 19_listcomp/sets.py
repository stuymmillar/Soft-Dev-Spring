def union(l1, l2):
    return [x for x in set(l1 + l2)]

print("Union:")
print(union([1,2,3], [2,3,4]))
print("\n")



def intersection(l1, l2):
    return [x for x in l1 if x in l2]

print("Intersection:")
print(intersection([1,2,3], [2,3,4]))
print("\n")



def difference(l1, l2):
    return [x for x in l1 if x not in l2]

print("Set Difference:")
print(difference([1,2,3], [2,3,4]))
print("\n")



def symmetricDifference(l1, l2):
    return [x for x in l1 if x not in l2] + [x for x in l2 if x not in l1]

print("Symmetric Difference:")
print(symmetricDifference([1,2,3], [2,3,4]))
print("\n")



def product(l1, l2):
    return [ [x,y] for x in l1 for y in l2 ]

print("Cartesian Product:")
print(product([1,2,3], [2,3,4]))
