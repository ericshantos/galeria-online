from flask import Flask
from .routes import main, livros
from .utils.helpers import injetar_ano
from flask_caching import Cache

cache = Cache()

def create_app():
    app = Flask(__name__)

    # Configuração do diretório estático
    app.static_folder = 'static'

    # Configuração do cache
    app.config['CACHE_TYPE'] = 'simple' 

    # Inicializa o cache com o aplicativo
    cache.init_app(app)

    # Registrar blueprints
    app.register_blueprint(main.bp, url_prefix='/')
    app.register_blueprint(livros.livros_bp, url_prefix='/livros')

    # Registrar o context processor para injetar o ano
    @app.context_processor
    def inject_year_context():
        return injetar_ano()

    return app