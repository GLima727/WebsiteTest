from flask import Flask
app = Flask(__name__)

@app.route('/index.html')
def hello_world_app():
    message = "Hello World!!"
    return message