#Team Eam Am M - Max Millar, Joshua Weiner
#SoftDev2 pd06
#K16 -- Do You Even List?
#2019-04-12

lower = 'abcdefghijklmnopqrstuvwxyz'
upper = lower.upper()
digits = '0123456789'
chars = '.?!&#,;:-_*'

def passCheck(p):
    if (1 in [1 for x in p if x in lower]):
        if (1 in [1 for x in p if x in upper]):
            if (1 in [1 for x in p if x in digits]):
                return True
    return False

print(passCheck('aB1'))
print(passCheck('abc'))
print(passCheck('123'))

def passRank(p):
    l = len([1 for x in p if x in lower]) / len(p)
    u = len([1 for x in p if x in upper]) / len(p)
    d = len([1 for x in p if x in digits]) / len(p)
    c = len([1 for x in p if x in chars]) / len(p)

    return int(10 - ((abs(.25 - u) + abs(.25 - d) + abs(.25 - c) + abs(.25 - l)) * (20/3)))

print(passRank('aB1;'))
print(passRank('aB11'))
print(passRank('aB'))
print(passRank('a'))
