# app.py
from flask import Flask
from database import db
from routes import main

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
db.init_app(app)

app.register_blueprint(main)

if __name__ == "__main__":
    app.run(debug=True)
