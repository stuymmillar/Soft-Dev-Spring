from flask import Flask

app = Flask(__name__)

@app.route('/')
def render_test():
    return "Hello World!"

if __name__ == '__main__':
    app.debug = True
    app.run()
