const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017"; // URL de conexão com o MongoDB

// Função para conectar ao MongoDB
async function connect() {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db("nome_do_banco_de_dados"); // Substitua 'nome_do_banco_de_dados' pelo nome do seu banco de dados
    console.log("Conexão bem-sucedida ao MongoDB");
    return db;
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB", error);
  }
}

module.exports = { connect };
