const express = require("express");
const app = express();

app.use(express.static("public"));

//Rotas
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, function () {
  console.log(
    "O servidor está rodando na porta 3000\n\nhttp://localhost:3000/"
  );
});
