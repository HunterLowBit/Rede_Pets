 //Arquivo com todas as funções relacionadas ao chat 

// Função que cria o chat, criando elementos html, através do JS.
// Dentro  da função há diversas interações, com a grid do chat 
//A função openChat(event) é chamada quando um dos perfis 
//de chat é clicado. Ela cria uma nova janela de chat dinamica
//e a adiciona ao corpo da página. 
function openChat(event) {
  //Obtém o nome do perfil a partir do texto do elemento clicado.
  var profileName = event.target.textContent; 
  
  //Usa uma div para criar a janela do chat grid
  var chatWindow = document.createElement('div'); 
  chatWindow.className = 'chat-window-small';
  
  //Usa uma div para criar uma divisão para o título do chat, e 
  //chama o nome dos perfis para dentro
  var chatTitle = document.createElement('div');
  chatTitle.className = 'chat-title';
  chatTitle.textContent = 'Chat com ' + profileName;
  //Cria área input de texto
  var chatInput = document.createElement('textarea');
  chatInput.className = 'chat-input';
  chatInput.placeholder = 'Digite sua mensagem...';
  //Cria o botão de fechar  
  var closeButton = document.createElement('button');
closeButton.className = 'chat-close-button';
closeButton.innerHTML = '&#x2716;'; 
closeButton.addEventListener('click', closeChat);
chatWindow.appendChild(chatTitle);
chatWindow.appendChild(closeButton);
  

  
  //Cria botão de envio da mensagem
  var sendButton = document.createElement('button');
  sendButton.textContent = 'Enviar';
  sendButton.style.fontSize = '12px'; 
  sendButton.style.marginTop = '5px';
  sendButton.addEventListener('click', sendMessage);
  chatWindow.appendChild(chatTitle);
  chatWindow.appendChild(sendButton);
  chatWindow.appendChild(chatInput);
  document.body.appendChild(chatWindow);

  
}

aa //Função que possibilita o chat poder ser minimizado
 function toggleChat() {
      var chatWindow = document.querySelector('.chat-window');
      chatWindow.classList.toggle('minimized');
    }



function closeChat(event) {
  var chatWindow = event.target.closest('.chat-window-small');
  chatWindow.remove();
}

function sendMessage(event) {
  var chatWindow = event.target.closest('.chat-window-small');
  var chatInput = chatWindow.querySelector('.chat-input');
  var message = chatInput.value;
  chatInput.value = '';
}
