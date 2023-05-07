const express = require('express');
const Handlebars = require('express-handlebars');
const app = express();

app.engine('handlebars', Handlebars({defaultlayout: 'main'}));
app.set('view engine', 'handlebars');


app.listen(3000, function() {
  console.log('O servidor está rodando na porta 3000\n\nhttp://localhost:3000/');
});

