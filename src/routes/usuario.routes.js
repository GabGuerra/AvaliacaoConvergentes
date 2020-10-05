const usuarioRouter = require('express').Router();
const usuarioController = require('../controllers/UsuarioController')();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,cb) =>{ 
        cb(null, 'uploads/')
    },
    filename: (req,file,cb) =>{
        cb(null,file.originalname)
    }
});
const upload = multer({ storage });

usuarioRouter.get('/Inicio', usuarioController.Inicio);
usuarioRouter.post('/UploadArquivo',upload.single('file'), usuarioController.UploadArquivo);
usuarioRouter.get('/DownloadArquivo', usuarioController.DownloadArquivo);

module.exports = usuarioRouter;