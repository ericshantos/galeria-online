# -*- coding: utf-8 -*-
"""
@Author  : Eric dos Santos (ericshantos13@gmail.com)
Módulo reponsável administrar a galeria.
"""

import os
from flask import Flask, render_template, Response

app = Flask(__name__)


@app.route('/')
def index() -> Response:
    """
    Função que renderiza a página inicial.

    Retorna:
        Response: Objeto de resposta Flask contendo a página HTML inicial.
    """
    # Renderiza a página HTML inicial
    return render_template('index.html')

@app.route('/galeria')
def galeria() -> Response:
    """
    Função que renderiza a página da galeria de imagens.

    Retorna:
        Response: Objeto de resposta Flask contendo a página HTML da galeria.
    """
    # Diretório das imagens estáticas
    image_folder = os.path.join('static', 'images')

    # Lista de imagens no diretório estático
    images = [f for f in os.listdir(image_folder) if f.endswith(('jpg', 'jpeg', 'png', 'gif'))]

    # Renderiza a página HTML da galeria, passando a lista de imagens como parâmetro
    return render_template('galeria.html', images=images)

if __name__ == '__main__':
    app.run(debug=True)
