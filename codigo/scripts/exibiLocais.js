// Passo 1: Obter os dados do array do localStorage
var locaisCadastrados = localStorage.getItem('locaisCadastrados');
locaisCadastrados = JSON.parse(locaisCadastrados);

// Passo 2: Criar uma variável para armazenar o HTML dos cards
var cardsHtml = '';

// Passo 3: Iterar sobre os itens do array e gerar o HTML dos cards
for (var i = 0; i < locaisCadastrados.length; i++) {
  var local = locaisCadastrados[i];

  // Gerar o HTML do card com os dados correspondentes
  var cardHtml = `
    <div class="card swiper-slide me-3 mt-3">
      <div class="image-content">
        <span class="overlay"></span>

        <div class="card-image">
          <img src="${local.imagem}" alt="" class="card-img">
        </div>
      </div>
      <div class="card-content">
        <h2 class="name">${local.name}</h2>
        <p class="description">${local.endereco}</p>
        <p class="description">${local.openingHours}</p>

        <button class="button" onclick="redirectToDetails('${local.name}', '${local.endereco}', '${local.openingHours}')">Explorar</button>
      </div>
    </div>
  `;

  // Adicionar o HTML do card à variável cardsHtml
  cardsHtml += cardHtml;
}

// Passo 4: Inserir o HTML dos cards na seção com ID "exibiLocais"
var mateusSection = document.getElementById('exibiLocais');
mateusSection.innerHTML = cardsHtml;

// Função para redirecionar para a página de detalhes
function redirectToDetails(name, endereco, openingHours) {
  // Construa a URL da página de detalhes com os parâmetros necessários
  var url = 'detalhes.html?name=' + encodeURIComponent(name) + '&endereco=' + encodeURIComponent(endereco) + '&openingHours=' + encodeURIComponent(openingHours);

  // Redirecionar o usuário para a página de detalhes
  window.location.href = url;
}
