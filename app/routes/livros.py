from flask import Blueprint, render_template, Response

livros_bp = Blueprint('livros', __name__)


@livros_bp.route('/retratos-urbanos')
def retratos_urbanos() -> Response:
    """
    Rota que renderiza o foto-livro "Retratos Urbanos".

    Retorna:
        Response: Objeto de resposta Flask contendo a página HTML inicial.
    """
    # Renderiza a página HTML inicial
    return render_template('livros/retratos-urbanos.html')

