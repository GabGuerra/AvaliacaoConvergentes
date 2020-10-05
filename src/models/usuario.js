const mongoose = require('mongoose');
const { Schema } = mongoose;

var usuarioSchema = new mongoose.Schema({      
    IdUsuario:{type: Number,required: true},
    CaminhoFotoUsuario: {type: String, required: true} 
});

module.exports = mongoose.model('usuarios', usuarioSchema);