#Ebenezer - Max Millar and Tim Marder
#SoftDev pd06
#K07 -- Import/Export Bank
#2019-03-05

'''
Our dataset is called "Laureate" and it is a comprehensive list of every
Nobel Prize Laureate, as well as various information about the laureate,
such as their the prizes they recieved, their motivation for said prizes,
or their country of origin.
Link: http://api.nobelprize.org/v1/laureate.json
Our import mechanism opens the laureate.json file downloaded from the api,
loads the data from the file, and inserts it into the collection we created. 
'''

import json

import pymongo

SERVER_ADDR='localhost'
client = pymongo.MongoClient(SERVER_ADDR)
db = client["Ebenezer"]
laureates = db['laureates']

db.laureates.drop()
with open('laureate.json') as f:
    file_data = json.load(f)

laureates.insert(file_data["laureates"])

def queryPrize(prize):
    for laureate in laureates.find({'prizes.category': prize}):
        try:
            print(laureate["firstname"] + ' ' + laureate["surname"])
        except:
            print(laureate["firstname"])        

def queryPrizeNum(prizeNum):
    for laureate in laureates.find({'$where' : 'this.prizes.length>' + prizeNum}):
        try:
            print(laureate["firstname"] + ' ' + laureate["surname"])
        except:
            print(laureate["firstname"])
            
def queryYear(year):
     for laureate in laureates.find({'prizes.year':year}):
        try:
            print(laureate["firstname"] + ' ' + laureate["surname"])
        except:
            print(laureate["firstname"])

def queryPrizeYear(prize,year):
     for laureate in laureates.find({'$and' : [{'prizes.year':year}, {'prizes.category':prize}]}):
        try:
            print(laureate["firstname"] + ' ' + laureate["surname"])
        except:
            print(laureate["firstname"])
            
print('--------------------prize-------------------')
queryPrize('physics')
print('--------------------prizeNum-------------------')
queryPrizeNum('1')
print('--------------------year-------------------')
queryYear('1901')
print('--------------------prizeYear-------------------')
queryPrizeYear('physics','1901')
