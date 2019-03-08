import json

import pymongo    

def dropDatabase():
    client = pymongo.MongoClient('localhost')
    db = client["nobels"]
    db.laureates.drop()

def queryYear(year, ip):
    try:
        client = pymongo.MongoClient(ip)
    except:
        print("error")
        client = pymongo.MongoClient('localhost')
    db = client["nobels"]
    laureates = db['laureates']

    db.laureates.drop()
    with open('data/laureate.json') as f:
        file_data = json.load(f)

    laureates.insert(file_data["laureates"])

    ret = ""
    for laureate in laureates.find({'prizes.year':year}):
        try:
            ret += laureate["firstname"] + ' ' + laureate["surname"] + '<br>'
        except:
            ret += laureate["firstname"] + '<br>'
    return ret

            
'''        
print('--------------------prize-------------------')
queryPrize('physics')
print('--------------------prizeNum-------------------')
queryPrizeNum('1')
print('--------------------year-------------------')
queryYear('1901')
print('--------------------prizeYear-------------------')
queryPrizeYear('physics','1901')
'''
