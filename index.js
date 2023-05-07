const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

  app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars');

//Rotas
app.get('/', function(req, res){
  res.render('index')
})

app.listen(3000, function() {
  console.log('O servidor está rodando na porta 3000\n\nhttp://localhost:3000/');
});

