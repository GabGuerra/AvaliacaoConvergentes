const { models } = require("mongoose");
const CarrinhoModel = require('../models/carrinho');
const carrinho = new CarrinhoModel({ Livros: [], QtdTotal: 0 });
const livrosCollection = require('../models/livro');

module.exports = () =>{
    const controller = {};
    var itensCarrinho = [];
    const livrosData = require("../data/LivrosData.json");

    controller.AdicionarAoCarrinho = (req, res, next) => {
        var skuProduto = req.params.sku;
        console.log(req.params.sku);
        livrosCollection.findOne({ "sku": skuProduto }, (err, livro) => {
            if (err)
                return res.status(400).json("Não foi possível adicionar ao carrinho:" + err);

                carrinho.Adicionar(livro);

            console.log("Livros no carrinho: ");
            carrinho.Livros.forEach(l => {
                console.log(l.NomeLivro + " | " + l.Qtd);
            });

            //Soma vlr total            
            let vlrTotalCarrinho = carrinho.Livros.reduce((a, l) => a + l.Preco * l.Qtd, 0);
            console.log("Valor total do carrinho: R$" + vlrTotalCarrinho);


        });

        res.redirect("/");
    };

    controller.FinalizarCarrinho = (req, res) => {

        carrinho.AplicarDesconto(0.1);
        console.log("Valor com desconto: R$" +  carrinho.Livros.reduce((a, l) => a + l.Preco * l.Qtd, 0));
        res.redirect("/");

    };

    return controller;
}