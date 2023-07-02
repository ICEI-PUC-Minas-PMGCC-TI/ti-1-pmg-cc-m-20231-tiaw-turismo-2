var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');
var endereco = urlParams.get('endereco');
var openingHours = urlParams.get('openingHours');

document.getElementById('name').textContent = name;
document.getElementById('endereco').textContent = endereco;
document.getElementById('openingHours').textContent = openingHours;

function goBack() {
  window.history.back();
}