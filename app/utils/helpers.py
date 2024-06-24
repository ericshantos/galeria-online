# -*- coding: utf-8 -*-
"""
@Author  : Eric dos Santos (ericshantos13@gmail.com)
Módulo reponsável por armazenar funções auxiliares.
"""

from datetime import datetime

def injetar_ano() -> dict:
    """
    Retorna o ano atual como um dicionário com a chave 'ano_atual'.
    
    Utiliza o módulo datetime para obter o ano atual.
    
    Returns:
        dict: Um dicionário contendo o ano atual.
    """
    ano_atual = datetime.now().year
    return {'ano_atual': ano_atual}

