let stars = document.querySelectorAll('.star-icon');

document.addEventListener('click', function(e) {
  let classStar = e.target.classList;
  if (!classStar.contains('ativo')) {
    stars.forEach(function(star) {
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});

document.addEventListener('DOMContentLoaded', function() {
  let formulario = document.querySelector('#avaliacaoForm');
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      let nome = document.querySelector('#nome').value;
      let titulo = document.querySelector('#title').value;
      let comentario = document.querySelector('#avalie').value;
      let estabelecimento = document.querySelector('#Estabelec').value;
  
      let classificacao = '';
      let classificacaoAtiva = document.querySelector('.avaliacao .ativo');
      if (classificacaoAtiva) {
        classificacao = classificacaoAtiva.getAttribute('data-avaliacao');
      }
      
      if (!classificacaoAtiva) {
        classificacao = '3';
      }
  
      let dadosFormulario = {
        nome: nome,
        titulo: titulo,
        comentario: comentario,
        estabelecimento: estabelecimento,
        classificacao: classificacao
      };
  
      // Obtém os dados existentes do localStorage
      let dadosAntigosJSON = localStorage.getItem('dadosFormulario');
      let dadosAntigos = [];
  
      if (dadosAntigosJSON) {
        dadosAntigos = JSON.parse(dadosAntigosJSON);
  
        if (!Array.isArray(dadosAntigos)) {
          dadosAntigos = [];
        }
      }
  
      // Adiciona o novo comentário à lista de comentários
      dadosAntigos.push(dadosFormulario);
  
      // Armazena os dados atualizados no localStorage
      localStorage.setItem('dadosFormulario', JSON.stringify(dadosAntigos));
  
      alert('Avaliação registrada com sucesso!');
      formulario.reset();
    });

  let botaoCarregar = document.querySelector('#carregarDados');

  botaoCarregar.addEventListener('click', function(event) {
    event.preventDefault();

    let dadosSalvosJSON = localStorage.getItem('dadosFormulario');

    if (dadosSalvosJSON) {
      let dadosSalvos = JSON.parse(dadosSalvosJSON);

      if (dadosSalvos.length > 0) {
        let mensagem = 'Comentários Salvos:\n\n';

        dadosSalvos.forEach(function(comentario) {
          mensagem += `Nome: ${comentario.nome}\nTítulo: ${comentario.titulo}\nComentário: ${comentario.comentario}\nEstabelecimento: ${comentario.estabelecimento}\nClassificação: ${comentario.classificacao}\n\n`;
        });

        alert(mensagem);
      } else {
        alert('Nenhum comentário registrado.');
      }
    } else {
      alert('Nenhum comentário registrado.');
    }
  });
});


// Página de exibição dos comentários
document.addEventListener('DOMContentLoaded', function() {
  let container = document.getElementById('avaliacoesContainer');

  let dadosSalvosJSON = localStorage.getItem('dadosFormulario');

  if (container && dadosSalvosJSON) {
    let dadosSalvos = JSON.parse(dadosSalvosJSON);

    if (dadosSalvos.length > 0) {
      let html = '';

      dadosSalvos.forEach(function(comentario) {
        html += `
          <div>
            <h3>${comentario.titulo}</h3>
            <p><strong>Nome:</strong> ${comentario.nome}</p>
            <p><strong>Comentário:</strong> ${comentario.comentario}</p>
            <p><strong>Estabelecimento:</strong> ${comentario.estabelecimento}</p>
            <p><strong>Classificação:</strong> ${comentario.classificacao}</p>
          </div>
          <hr>
        `;
      });

      container.innerHTML = html;
    } else {
      container.innerHTML = 'Nenhum comentário registrado.';
    }
  } else {
    console.log('Elemento container não encontrado ou dados não encontrados no localStorage.');
  }
});

function redirectToDetails(name) {

  var url = 'exibir.html?name=' + nomeLugar;

  window.location.href = url;
}

const url = window.location.href;
const urlObj = new URL(url);
const nomeLugar = urlObj.searchParams.get("name");
console.log(nomeLugar);

document.addEventListener('DOMContentLoaded', function() {
  let container = document.getElementById('avaliacoesContainer');

  let dadosSalvosJSON = localStorage.getItem('dadosFormulario');

  if (dadosSalvosJSON) {
    let dadosSalvos = JSON.parse(dadosSalvosJSON);
    let objetosFiltrados = dadosSalvos.filter((e) => {
        return e.estabelecimento === nomeLugar;
    })

    if (objetosFiltrados.length > 0) {
      let html = '';

      objetosFiltrados.forEach(function(comentario) {
        html += `
          <div>
            <h3>${comentario.titulo}</h3>
            <p><strong>Nome:</strong> ${comentario.nome}</p>
            <p><strong>Comentário:</strong> ${comentario.comentario}</p>
            <p><strong>Estabelecimento:</strong> ${comentario.estabelecimento}</p>
            <p><strong>Classificação:</strong> ${comentario.classificacao}</p>
          </div>
          <hr>
        `;
      });

      container.innerHTML = html;
    } else {
      container.innerHTML = '<p>Nenhum comentário registrado. Preencha o formulário de avaliação para ser exibido aqui!</p>';
      console.log("aqui")
    }
  } else {
    container.innerHTML = '<p>Nenhum comentário registrado! <br>Preencha o formulário de avaliação para ser exibido aqui.</p>';
    console.log("ali")
  }
});

