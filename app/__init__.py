from flask import Flask
from .routes import main
from .utils.helpers import injetar_ano

def create_app():
    app = Flask(__name__)

    # Configuração do diretório estático
    app.static_folder = 'static'

    # Registrar blueprints
    app.register_blueprint(main.bp, url_prefix='/')

    # Registrar o context processor para injetar o ano
    @app.context_processor
    def inject_year_context():
        return injetar_ano()

    return app