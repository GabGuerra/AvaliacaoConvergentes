const livro = require("./livro");
const CarrinhoItem = require("./carrinhoItem");

module.exports = function Carrinho(oldCarrinho) {
    this.Livros = oldCarrinho.Livros;
    this.QtdTotal = oldCarrinho.QtdTotal;

    this.Adicionar = (item) => {                

        var livroArmazenado = this.Livros.filter((l) => {
            return l.sku == item.sku;
        })[0];        
        
        //Se o livro não existir no array de livros insere o objeto    
        if (!livroArmazenado) {
            console.log(item.NomeLivro + " não existia, adicionando.. .")
            var carrinhoItem = new CarrinhoItem({
                sku: item.sku,
                NomeLivro: item.NomeLivro,
                Autor: item.Autor,
                DataPublicacao: item.DataPublicacao,
                Preco: item.Preco,
                Descricao: item.Descricao,
                CaminhoImagem: item.CaminhoImagem,
                Qtd: 1
            });            
            this.Livros.push(carrinhoItem);                   
        } else 
            livroArmazenado.Qtd+=1;                      

        this.QtdTotal+=1;
    }; 
}; 