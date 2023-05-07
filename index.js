const express = require('express');
const app = express();
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

app.listen(3000, function() {
  console.log('O servidor está rodando na porta 3000\n\nhttp://localhost:3000/');
});

