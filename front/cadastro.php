<?php


$servername = "nome_do_servidor";
$username = "nome_de_usuario";
$password = "senha";
$dbname = "nome_do_banco_de_dados";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $nomeHumano = $_POST["nome-humano"];
    $idadeHumano = $_POST["idade-humano"];
    $email = $_POST["email"];
    $sexoHumano = $_POST["sexo-humano"];
    $nomeBichinho = $_POST["nome-bichinho"];
    $idadeBichinho = $_POST["idade-bichinho"];
    $especieBichinho = $_POST["especie-bichinho"];
    $racaBichinho = $_POST["raca-bichinho"];
    $sexoBichinho = $_POST["sexo-bichinho"];
    $corBichinho = $_POST["cor-bichinho"];
    $corOlhosBichinho = $_POST["cor-olhos-bichinho"];
    $tamanhoBichinho = $_POST["tamanho-bichinho"];
    $pesoBichinho = $_POST["peso-bichinho"];
    $corPreferidaBichinho = $_POST["cor-preferida-bichinho"];
    $comidaPreferidaBichinho = $_POST["comida-preferida-bichinho"];


    $sql = "INSERT INTO nome_da_tabela (nome_humano, idade_humano, email, sexo_humano, nome_bichinho, idade_bichinho, especie_bichinho, raca_bichinho, sexo_bichinho, cor_bichinho, cor_olhos_bichinho, tamanho_bichinho, peso_bichinho, cor_preferida_bichinho, comida_preferida_bichinho) 
            VALUES ('$nomeHumano', $idadeHumano, '$email', '$sexoHumano', '$nomeBichinho', $idadeBichinho, '$especieBichinho', '$racaBichinho', '$sexoBichinho', '$corBichinho', '$corOlhosBichinho', '$tamanhoBichinho', $pesoBichinho, '$corPreferidaBichinho', '$comidaPreferidaBichinho')";


    if ($conn->query($sql) === TRUE) {
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro ao inserir os dados: " . $conn->error;
    }


    $conn->close();
}

?>
