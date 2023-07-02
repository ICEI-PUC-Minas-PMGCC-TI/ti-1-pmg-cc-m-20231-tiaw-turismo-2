var locaisCadastrados = localStorage.getItem('locaisCadastrados');
locaisCadastrados = JSON.parse(locaisCadastrados);

var cardsHtml = '';

for (var i = 0; i < locaisCadastrados.length; i++) {
  var local = locaisCadastrados[i];

  var cardHtml = `
    <div class="card swiper-slide me-3 mt-3" id="teste">
      <div class="image-content">
        <span class="overlay"></span>

        <div class="card-image">
          <img src="${local.image}" alt="" class="card-img">
        </div>
      </div>
      <div class="card-content">
        <h2 class="name">${local.name}</h2>
        <p class="description">${local.address}</p>
        <p class="description">${local.openingHours}</p>

        <button class="button" onclick="redirectToDetails('${local.name}', '${local.address}', '${local.openingHours}', '${local.neighborhood}')">Explorar</button>
      </div>
    </div>
  `;
  cardsHtml += cardHtml;
}


var mateusSection = document.getElementById('exibiLocais');
mateusSection.innerHTML = cardsHtml;


function redirectToDetails(name, address, openingHours, neighborhood) {
  var url = 'detalhes.html?name=' + encodeURIComponent(name) + '&endereco=' + encodeURIComponent(address) + '&openingHours=' + encodeURIComponent(openingHours) + '&neighborhoods=' + encodeURIComponent(neighborhood);

  window.location.href = url;
}