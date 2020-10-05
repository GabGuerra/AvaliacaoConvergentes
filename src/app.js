const express = require('express');
const mongoose = require('mongoose');
const livrosRoutes = require('./routes/livros.routes');
const indexRoute = require('./routes/index.routes');
const usuarioRoute = require('./routes/usuario.routes');
const carrinhoRoute = require('./routes/carrinho.routes');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require("cors");
const app = express();

//Cors
app.use(cors());

//Conecta ao BD.
mongoose.connect('mongodb://127.0.0.1:27017/biblioteca', { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Banco conectado!!')
);

//Session
app.use(session({
    secret: 'ssshhhhh',
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
}));

// app.use(function(req, res, next){
//     res.locals.session = req.session;
//     next();
// });

//Flash
// app.use(flash());

//JSON
app.use(express.json());

// app.use(express.static('public'));

//Routes
app.use('/livros', livrosRoutes);
app.use('/', indexRoute);
app.use('/Usuario', usuarioRoute);
app.use('/Carrinho', carrinhoRoute);

//Configs
const yaml = require('js-yaml');
const fs = require('fs');

//Path
var path = require ('path');

//View engine
app.engine('.hbs', expressHbs({defaultLayout:'layout',extname:'.hbs', runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }}));
  
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", ".hbs");  

//Ambiente
let env = process.env.NODE_ENV;
env = env == undefined ? 'dev' : env;
let data;
console.log("env: " + env);
//Leitura do arquivo YAML com o domínio 
try {
    let fileContents = fs.readFileSync('./src/resources/' + env + '.yaml', 'utf8');    
    data = yaml.safeLoad(fileContents);    
} catch (e) {
    console.log(e);
}

console.log('Iniciando aplicação porta: '+ (data['port']));
app.listen(data['port']);