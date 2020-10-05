module.exports = () => {
    const controller = {};        

    controller.Inicio = (req, res) => {
        res.render('usuario', { title: 'Usuário'});
    };

    controller.UploadArquivo = (req,res) => {
        console.log(req.file);
    };

    // controller.DownloadArquivo = (req,res) =: {
        
    // }

    return controller;
}