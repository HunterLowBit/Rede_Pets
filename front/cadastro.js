document.getElementById('cadastro-form').addEventListener('submit', function(event) {
  event.preventDefault(); 


  var nomeHumano = document.getElementById('nome-humano').value;
  var idadeHumano = document.getElementById('idade-humano').value;
  var email = document.getElementById('email').value;
  var sexoHumano = document.getElementById('sexo-humano').value;
  var nomeBichinho = document.getElementById('nome-bichinho').value;
  var idadeBichinho = document.getElementById('idade-bichinho').value;
  var especieBichinho = document.getElementById('especie-bichinho').value;
  var racaBichinho = document.getElementById('raca-bichinho').value;
  var sexoBichinho = document.getElementById('sexo-bichinho').value;
  var corBichinho = document.getElementById('cor-bichinho').value;
  var corOlhosBichinho = document.getElementById('cor-olhos-bichinho').value;
  var tamanhoBichinho = document.getElementById('tamanho-bichinho').value;
  var pesoBichinho = document.getElementById('peso-bichinho').value;
  var corPreferidaBichinho = document.getElementById('cor-preferida-bichinho').value;
  var comidaPreferidaBichinho = document.getElementById('comida-preferida-bichinho').value;


  console.log('Dados do Humano de Estimação:');
  console.log('Nome: ' + nomeHumano);
  console.log('Idade: ' + idadeHumano);
  console.log('Email: ' + email);
  console.log('Sexo: ' + sexoHumano);

  console.log('Dados do Bichinho:');
  console.log('Nome: ' + nomeBichinho);
  console.log('Idade: ' + idadeBichinho);
  console.log('Espécie: ' + especieBichinho);
  console.log('Raça: ' + racaBichinho);
  console.log('Sexo: ' + sexoBichinho);
  console.log('Cor: ' + corBichinho);
  console.log('Cor dos Olhos: ' + corOlhosBichinho);
  console.log('Tamanho: ' + tamanhoBichinho);
  console.log('Peso: ' + pesoBichinho);
  console.log('Cor Preferida: ' + corPreferidaBichinho);
  console.log('Comida Preferida: ' + comidaPreferidaBichinho);

  
  alert('Cadastro realizado com sucesso!');
});
