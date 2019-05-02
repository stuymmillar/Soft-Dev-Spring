'''
def fib(n):
	if n ==0:
		return 0
	elif n == 1:
		return 1
    else:
		return fib(n - 1) + fib(n - 2)
'''
'''
def memoize(f):
    memo = {}
    def helper(x):
        print(x)
        print(memo)
        if x in memo.keys():
            return memo[x]
        else:
            memo[x] = f(x)
            return memo[x]
    return helper

def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

fib = memoize(fib)
print(fib(40))
'''

def memoize(f):
    memo = {}
    def helper(x):
        #print(x)
        #print(memo)
        if x in memo.keys():
            return memo[x]
        else:
            memo[x] = f(x)
            return memo[x]
    return helper

@memoize
def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

print(fib(6))
