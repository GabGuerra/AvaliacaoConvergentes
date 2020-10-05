const { restart } = require("nodemon");

const LivroSchema = require('../models/livro');

// LivroSchema.create(
//     {
//         SKU: "LVRCM0108200835000",
//         NomeLivro: "Clean Code",
//         DataPublicacao: "01/08/2008",
//         Preco: 350.00    
//     },
//      function(err, livro){
//     if (err) return handleError(err);
// });


module.exports = () => {
    const controller = {};    
    
    controller.ListarLivros = (req,res) => {                
        LivroSchema.find()
            .then(livros => {
                res.status(200).json(livros);
            });
    };

    controller.FiltrarLivros = (req,res) => {
       
    };
    

    return controller;
}