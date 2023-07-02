document.getElementById("delete").addEventListener("click", function() {
    // Obter o endereço do local a ser removido
    var enderecoRemover = document.getElementById("adress").value;
  
    // Obter os dados cadastrados armazenados no localStorage
    var dadosSalvos = localStorage.getItem('locaisCadastrados');
    var locaisCadastrados;
    if (dadosSalvos) {
      locaisCadastrados = JSON.parse(dadosSalvos);
    } else {
      locaisCadastrados = [];
    }
  
    // Procurar o local a ser removido no array
    var indiceRemover = -1;
    for (var i = 0; i < locaisCadastrados.length; i++) {
      if (locaisCadastrados[i].endereco === enderecoRemover) {
        indiceRemover = i;
        break;
      }
    }
  
    if (indiceRemover !== -1) {
      // Remover o local do array
      locaisCadastrados.splice(indiceRemover, 1);
  
      // Atualizar os dados cadastrados no localStorage
      localStorage.setItem('locaisCadastrados', JSON.stringify(locaisCadastrados));
  
      console.log("Local removido com sucesso!");
    } else {
      alert("Local não encontrado!");
    }
  });