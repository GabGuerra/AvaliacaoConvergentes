module.exports = () => {
    const controller = {};    
    const usuarioSchema = require('../models/usuario');


    //Para simular foto de usuário
    const idUsuarioLogado = 2;
    controller.Inicio = (req, res) => {
        res.render('usuario', { title: 'Usuário'});
    };    

    controller.UploadArquivo = (req,res) => {        
        console.log(req.file);
        if(req.file){
            var caminho = 'uploads/'+req.file.originalname;  
        console.log(caminho);
        var usuario = new usuarioSchema({
            IdUsuario:idUsuarioLogado,
            CaminhoFotoUsuario: caminho 
        });
        
        usuario.save((err,data) => {
            if(err)
                res.status(400).json("Não foi possível realizar o upload.");

            res.redirect("/");
        });
        }else
            res.status(400).json("Selecione um arquivo.");
    };

    controller.DownloadArquivo = (req,res) => {        
        usuarioSchema.findOne({ IdUsuario: idUsuarioLogado }, (err,data) => {   
            if(err || !data)
                res.status(400).json("Não foi possível obter a foto do usuário.");            
            
            res.download(data.CaminhoFotoUsuario);
        });        
    };


    return controller;
}