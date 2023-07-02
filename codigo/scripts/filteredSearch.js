// Obtém as referências aos elementos HTML
const searchForm = document.getElementById("search-form"); // Formulário de pesquisa
const resultsContainer = document.getElementById("results"); // Container dos resultados

// Adiciona um ouvinte de evento para o evento de envio do formulário
searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores dos campos de entrada do formulário
  const neighborhood = document.getElementById("neighborhood").value; // Valor do campo "neighborhood"
  const type = document.getElementById("type").value; // Valor do campo "type"
  const budget = document.getElementById("budget").value; // Valor do campo "budget"
  const rating = document.getElementById("rating").value; // Valor do campo "rating"
  const popularity = document.getElementById("popularity").value; // Valor do campo "popularity"
  const openingHours = document.getElementById("openingHours").value; // Valor do campo "openingHours"

  // Obtém os dados do LocalStorage
  const localStorageData = JSON.parse(
    localStorage.getItem("locaisCadastrados")
  );

  // Filtra os resultados com base nos critérios de pesquisa
  const filteredLocations = filterLocations(
    localStorageData,
    neighborhood,
    type,
    budget,
    rating,
    popularity,
    openingHours
  );

  // Exibe os resultados filtrados
  displayLocations(filteredLocations);
});

// Função para filtrar os resultados com base nos critérios de pesquisa
function filterLocations(
  data,
  neighborhood,
  type,
  budget,
  rating,
  popularity,
  openingHours
) {
  return data.filter((location) => {
    return (
      (neighborhood === "" || location.neighborhood === neighborhood) &&
      (type === "" || location.type === type) &&
      (budget === "" || location.budget === budget) &&
      (rating === "" || location.rating === rating) &&
      (popularity === "" || location.popularity === popularity) &&
      (openingHours === "" || location.openingHours.includes(openingHours))
    );
  });
}

// Função para criar os cards dos locais
const createLocationCard = (location) => {
  const card = document.createElement("div");
  card.classList.add("col-md-4");

  const cardContent = `
      <div class="card border-0 mb-4 bg-light-subtle bg-gradient shadow">
        <div class="bg-transparent p-3 rounded">
          <img src="${
            location.image
          }" class="card-img-top rounded-1" alt="Foto ${location.name}">
        </div>
        <div class="card-body rounded bg-transparent">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h5 class="card-title text-primary m-0">${location.name}</h5>
            <small class="text-black-50 m-0">${location.type}</small>
          </div>
          <div class="d-flex justify-content-start align-items-center mb-2">
            <div class="fs-4 m-0 me-2" id="rating">
              ${getStarRating(location.rating)}
            </div>
            <p class="card-text m-0">(${location.rating})</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="card-text m-0">Orçamento: ${location.budget}</p>
            <p class="card-text m-0">Popularidade: ${location.popularity}</p>
          </div>
        </div>
      </div>
    `;

  card.innerHTML = cardContent;
  return card;
};

// Função para obter o HTML das estrelas coloridas com base no rating
function getStarRating(rating) {
  const maxRating = 5; // Número máximo de estrelas
  let starHtml = "";

  for (let i = 1; i <= maxRating; i++) {
    const starClass = i <= rating ? "text-warning" : "text-dark";
    starHtml += `<span class="${starClass}">&#9733;</span>`;
  }

  return starHtml;
}

// Função para exibir os cards dos locais na página (resultados filtrados)
function displayLocations(results) {
  let html = "";
  results.forEach((location) => {
    html += `<h2 class="text-info">${location.neighborhood}</h2>`; // Título do bairro
    const locationCard = createLocationCard(location);
    html += locationCard.outerHTML;
  });

  resultsContainer.innerHTML = html; // Exibe o HTML dos resultados no container
  searchForm.reset(); // Limpa o formulário
}
