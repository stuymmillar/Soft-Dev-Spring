lower = 'abcdefghijklmnopqrstuvwxyz'
upper = lower.upper()
digits = '0123456789'

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
