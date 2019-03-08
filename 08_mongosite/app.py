#Team Rewind Time - Max Millar, Kendrick Liang, Jiajie Mai
#SoftDev2 pd06
#k08 -- Ay Mon, Go Git It From Yer Flask
#2019-03-08

from flask import Flask, render_template, request

from util import nobel as n

app = Flask(__name__)

n.dropDatabase()

@app.route('/')
def render_test():
    return render_template('index.html')

@app.route('/data', methods=['POST','GET'])
def dataRet():
    query = request.args['query']
    ip = request.args['ip']
    ret = n.queryYear(query, ip)
    return ret
    
if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')
