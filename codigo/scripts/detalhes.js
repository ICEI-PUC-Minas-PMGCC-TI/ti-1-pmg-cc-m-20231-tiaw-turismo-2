var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');
var endereco = urlParams.get('endereco');
var openingHours = urlParams.get('openingHours');
var neighborhoods = urlParams.get('neighborhoods');

document.getElementById('name').textContent = name;
document.getElementById('address').textContent = endereco;
document.getElementById('openingHours').textContent = openingHours;
document.getElementById('regiao').textContent = neighborhoods;

function goBack() {
  window.history.back();
}