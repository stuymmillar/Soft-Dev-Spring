from functools import reduce
import os
import re

with open('moby.txt','r') as f:
    word = f.read()
words = [x.lower() for x in re.split('[ \r\n,.?!;]', word) if x != '']


#print(words)

def wordFreq(w):
    return reduce((lambda x,y : x + y), [1 for x in words if x == w])

#print(wordFreq('Ahab'))

def wordsFreq(w):
    ws = [x for x in re.split('[ \r\n]', w) if x != '']
    return reduce((lambda x,y : x + y), [1 for x in [x for x in range(len(words)) if words[x] == ws[0]] if words[x:x + len(ws)] == ws])

#print(wordsFreq("Captain Ahab"))


#def mostFreq():
    s = list(set(words))
    freqs = [0 for a in range(len(s))]
    [freqs[s.index(x)] := freqs[s.index(x)] + 1 for x in words ]
    copy = freqs.sort(-1)
    return s[freqs.index(copy[0])]

#print(mostFreq())
