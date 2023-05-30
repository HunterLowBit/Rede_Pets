<?php

$servername = "";
$username = "";
$password = "";
$dbname = "";


$conn = new mysqli($servername, $username, $password);


if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}


$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Banco de dados criado com sucesso!";
} else {
    echo "Erro ao criar o banco de dados: " . $conn->error;
}


$conn->select_db($dbname);


$sql = "CREATE TABLE IF NOT EXISTS contas_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_humano VARCHAR(50),
    idade_humano INT,
    email VARCHAR(50),
    sexo_humano VARCHAR(10),
    nome_bichinho VARCHAR(50),
    idade_bichinho INT,
    especie_bichinho VARCHAR(50),
    raca_bichinho VARCHAR(50),
    sexo_bichinho VARCHAR(10),
    cor_bichinho VARCHAR(20),
    cor_olhos_bichinho VARCHAR(20),
    tamanho_bichinho VARCHAR(20),
    peso_bichinho FLOAT,
    cor_preferida_bichinho VARCHAR(20),
    comida_preferida_bichinho VARCHAR(50)
)";

if ($conn->query($sql) === TRUE) {
    echo "Tabela criada com sucesso!";
} else {
    echo "Erro ao criar a tabela: " . $conn->error;
}

$conn->close();

?>
