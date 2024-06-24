# -*- coding: utf-8 -*-
"""
@Author  : Eric dos Santos (ericshantos13@gmail.com)
Módulo reponsável administrar a galeria.
"""

from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
