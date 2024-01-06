from flask import Flask, render_template, request

from backend import hello

app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')


@app.route("/")
def home():
    return render_template('index.html')


@app.route("/rest/hello")
def hello():
    return hello.hello_world(request)
