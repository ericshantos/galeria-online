import os
from flask import Blueprint, render_template, current_app, Response

bp = Blueprint('main', __name__)


@bp.route('/')
def index() -> Response:
    """
    Rota que renderiza a página inicial.

    Retorna:
        Response: Objeto de resposta Flask contendo a página HTML inicial.
    """
    # Renderiza a página HTML inicial
    return render_template('index.html')

@bp.route('/galeria')
def galeria() -> Response:
    """
    Rota que renderiza a página da galeria de imagens.

    Retorna:
        Response: Objeto de resposta Flask contendo a página HTML da galeria.
    """
        # Diretório das imagens estáticas
    image_folder = os.path.join(current_app.root_path, 'static', 'images')

    # Lista de imagens no diretório estático
    images = [f for f in os.listdir(image_folder) if f.endswith(('jpg', 'jpeg', 'png', 'gif'))]

    # Renderiza a página HTML da galeria, passando a lista de imagens como parâmetro
    return render_template('galeria.html', images=images)

from flask import Blueprint, render_template, Response

@bp.route('/contato')
def contato() -> Response:
    """
    Rota para a página de contato.

    Retorna:
        Response: Uma resposta com o conteúdo renderizado do template 'contato.html'.
    """
    # Renderiza o template 'contato.html' e retorna como resposta
    return render_template('contato.html')
