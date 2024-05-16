from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="galeria online",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[],
    author="Eric dos Santos",
    author_email="ericshantos13@gmail.com",
    description="App Flask para expor meus registros fotográficos na web.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/ericshantos/galeria-online",
    license="MIT",
    keywords=["fotografia", "foto"],
    classifiers=[
        "Development Status :: 1 - Planning",
        "Development Status :: 2 - Pre-Alpha",
        "Operating System :: Microsoft :: Windows",
        "License :: OSI Approved :: MIT License",
        "Intended Audience :: Other Audience",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
    ],
)