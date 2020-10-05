const mongoose = require('mongoose');

const { Schema } = mongoose;

const livroSchema = new Schema({
    sku:{type: String,required: true},
    NomeLivro:{type: String},
    Autor:{type: String},
    DataPublicacao:{type: Date},
    Preco:{type: Number},    
    Descricao: {type:String},
    CaminhoImagem: { type:String, required: true}
});

module.exports = mongoose.model('livros', livroSchema);