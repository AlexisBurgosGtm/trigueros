var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

const execute = require('./router/connection');
var routerProyectos = require('./router/router_proyectos');
var routerBancos = require('./router/router_bancos');
var routerAcreedores = require('./router/router_acreedores');
var routerContratantes = require('./router/router_contratantes');
var routerUsuarios = require('./router/router_usuarios');

var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  /*
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name, pplication/json');
        // Set to true if you need the website to include cookies in the requests sent
      res.setHeader('Access-Control-Allow-Credentials', true);
  */
  console.log("/" + req.toString());
  next();
});

app.get("/",function(req,res){
  execute.start();
	res.sendFile(path + 'index.html');
}); 



//Router para PROYECTOS
app.use('/proyectos', routerProyectos);

//Router para SUBCONTRATISTAS / proveeores
app.use('/acreedores', routerAcreedores);

//Router para CONTRATANTES
app.use('/contratantes', routerContratantes);

//Router para BANCOS
app.use('/bancos', routerBancos);

//Router para USUARIOS
app.use('/usuarios', routerUsuarios);


app.use("/",router);


app.use("*", function (req, res) {
  res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});



// SOCKET HANDLER
io.on('connection', function(socket){
  socket.on('login', (user)=>{
    io.emit('login', `Sesión iniciada con usuario ${user}`)
  })

  socket.on('noticias nueva', (msg,usuario)=>{
    io.emit('noticias nueva', msg,usuario);
  });
 
  
});


http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

