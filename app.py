from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/galeria')
def galeria():
    image_folder = os.path.join('static', 'images')
    images = [f for f in os.listdir(image_folder) if f.endswith(('jpg', 'jpeg', 'png', 'gif'))]
    return render_template('galeria.html', images=images)

if __name__ == '__main__':
    app.run(debug=True)
