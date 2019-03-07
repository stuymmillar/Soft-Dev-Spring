from flask import Flask

import nobel

app = Flask(__name__)

@app.route('/')
def render_test():
    return "Hello World!"

@app.route('/data')
def dataRet():
    ret =nobel.getYear()
    return ret
    
if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')
