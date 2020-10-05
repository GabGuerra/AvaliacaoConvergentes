const { restart } = require("nodemon");
const livrosCollection = require('../models/livro');
const Carrinho = require("../models/carrinho");

module.exports = () => {
    const controller = {};    
    
    controller.Index = (req,res) =>{
        livrosCollection.find((err,livros) => {
            var linhasLivro = [];
            var tamanhoLinha = 3;            
            for(var i = 0; i < livros.length; i+= tamanhoLinha){
                linhasLivro.push(livros.slice(i, i +tamanhoLinha));
            }            
            res.render('index', { title: 'Biblioteca' , livros: linhasLivro});
        }).catch((err) => {
            console.log("Não foi possível listar os livros:" + err);
        });            
    };    

    controller.AdicionarAoCarrinho = (req,res, next) => {
        var skuProduto = req.params.sku;
        console.log(req.params.sku);
        var carrinho;            
        console.log(req.session.carrinho);    
        if (req.session.carrinho != undefined) {
            console.log("Obtendo carrinho da session");
            carrinho = new Carrinho(req.session.carrinho);            
        }            
        else {
            console.log("Criando novo carrinho");
            carrinho = new Carrinho({ Livros: [], QtdTotal: 0 });                
        }             
                
        livrosCollection.findOne({ "sku": skuProduto }, (err,livro) => {
            if (err) 
                return res.status(400).json("Não foi possível adicionar ao carrinho:" + err);
                        
            carrinho.Adicionar(livro);            
            
            req.session.carrinho = carrinho;                
        });        
        res.redirect("/");
    };

    controller.redirectUsuario = (req,res,next) => {
        res.redirect('/Usuario/Inicio');        
    };


    return controller;
}