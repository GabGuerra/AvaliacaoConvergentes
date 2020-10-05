const { restart } = require("nodemon");
const livrosCollection = require('../models/livro');
const Carrinho = require("../models/carrinho");

module.exports = () => {
    const controller = {};

    controller.Index = (req, res) => {
        livrosCollection.find((err, livros) => {
            var linhasLivro = [];
            var tamanhoLinha = 3;
            for (var i = 0; i < livros.length; i += tamanhoLinha) {
                linhasLivro.push(livros.slice(i, i + tamanhoLinha));
            }
            res.render('index', { title: 'Biblioteca', livros: linhasLivro });
        }).catch((err) => {
            console.log("Não foi possível listar os livros:" + err);
        });
    };

    return controller;
}