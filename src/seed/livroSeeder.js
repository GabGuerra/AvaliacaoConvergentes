const LivroSchema = require('../models/livro');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/biblioteca', { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Seeder de livros acionado!')
);


var livros = 
[    
    new LivroSchema({            
        NomeLivro: "Clean Code",
        DataPublicacao: "01/08/2008",
        Preco: 350.00,
        Descricao:"Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way",
        sku: "LVRCM0108200835000",
        CaminhoImagem: "https://images-na.ssl-images-amazon.com/images/I/41-+g1a2Y1L._SX258_BO1,204,203,200_.jpg"    
    }),
    new LivroSchema( {
        NomeLivro: "Domain Driven Design",
        Autor: "Eric Evans",
        DataPublicacao: "01/05/2003",
        Preco:150.00,
        Descricao:"Domain-Driven Design (DDD) software modeling delivers powerful results in practice, not just in theory, which is why developers worldwide are rapidly moving to adopt it. Now, for the first time, there’s an accessible guide to the basics of DDD: What it is, what problems it solves, how it works, and how to quickly gain value from it.",
        sku:"DDDEE010520031500",
        CaminhoImagem: "https://images-na.ssl-images-amazon.com/images/I/51sZW87slRL.jpg"    
    }),   
    new LivroSchema({
        NomeLivro: "Padrões de Arquitetura de Aplicações Corporativas",
        Autor: "Martin Fowler",
        DataPublicacao: "05/11/2002",
        Preco:200.00,
        Descricao:"Uma resposta aos grandes desafios enfrentados pelos profissionais que trabalham com o desenvolvimento de aplicações corporativas. Fowler reuniu um grupo de colaboradores para resumir mais de 40 soluções recorrentes em aplicações.",
        sku:"PAACMF0511200220000",
        CaminhoImagem: "https://images-na.ssl-images-amazon.com/images/I/517cM5mCxPL._SY445_QL70_ML2_.jpg"    
    }),
    new LivroSchema({    
        NomeLivro: "Refatoração - Aperfeiçoando o Projeto de Código Existente (Refactoring)",
        Autor: "Martin Fowler",
        DataPublicacao: "01/01/1999",
        Preco:200.00,
        Descricao:"Por mais de vinte anos, programadores experientes no mundo inteiro contaram com o livro Refatoração de Martin Fowler para aperfeiçoar o design de códigos existentes e melhorar a manutenibilidade do software, assim como para deixar o código existente mais fácil de entender.",
        sku:"RAPCEMF0101199920000",
        CaminhoImagem: "https://images-na.ssl-images-amazon.com/images/I/81sTm5M7wjL.jpg"        
    })
];

//Salva os livros e disconecta do mongo ao fim da iteração.
livros.forEach((item,i) => {
    item.save(function(err, result){        
        if(i == livros.length)
            mongoose.disconnect();
    });
});
