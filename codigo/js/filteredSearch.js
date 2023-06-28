// Obtém as referências aos elementos HTML
const searchForm = document.getElementById("search-form"); // Formulário de pesquisa
const resultsContainer = document.getElementById("results"); // Container dos resultados

// Adiciona um ouvinte de evento para o evento de envio do formulário
searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores dos campos de entrada do formulário
  const bairro = document.getElementById("bairro").value; // Valor do campo "bairro"
  const tipo = document.getElementById("tipo").value; // Valor do campo "tipo"
  const orcamento = document.getElementById("orcamento").value; // Valor do campo "orcamento"
  const avaliacao = document.getElementById("avaliacao").value; // Valor do campo "avaliacao"
  const popularidade = document.getElementById("popularidade").value; // Valor do campo "popularidade"
  const funcionamento = document.getElementById("funcionamento").value; // Valor do campo "funcionamento"

  const url = "data/data.json"; // URL do arquivo de dados JSON

  // Realiza uma requisição HTTP para obter os dados JSON
  fetch(url)
    .then((response) => response.json()) // Converte a resposta em JSON
    .then((data) =>
      filterResults(
        data,
        bairro,
        tipo,
        orcamento,
        avaliacao,
        popularidade,
        funcionamento
      )
    ) // Filtra os resultados com base nos critérios de pesquisa
    .then((filteredResults) => displayResults(filteredResults)) // Exibe os resultados filtrados
    .catch((error) => console.error(error)); // Lida com erros durante a requisição

  // Função para filtrar os resultados com base nos critérios de pesquisa
  const filterResults = (
    data,
    bairro,
    tipo,
    orcamento,
    avaliacao,
    popularidade,
    funcionamento
  ) => {
    return data.bairros
      .filter((b) => bairro === "" || b.nome === bairro) // Filtra os bairros com base no critério "bairro"
      .map((bairro) => {
        bairro.locais = bairro.locais.filter(
          (local) =>
            (tipo === "" || local.tipo === tipo) && // Filtra os locais com base no critério "tipo"
            (orcamento === "" || local.orcamento === orcamento) && // Filtra os locais com base no critério "orcamento"
            (avaliacao === "" || local.avaliacao === parseInt(avaliacao)) && // Filtra os locais com base no critério "avaliacao"
            (popularidade === "" || local.popularidade === popularidade) && // Filtra os locais com base no critério "popularidade"
            (funcionamento === "" ||
              local.funcionamento.includes(funcionamento)) // Filtra os locais com base no critério "funcionamento"
        );
        return bairro;
      });
  };

  // Função para exibir os resultados filtrados
  const displayResults = (results) => {
    let html = "";
    results.map((bairro) => {
      html += "<h2>" + bairro.nome + "</h2>"; // Título do bairro
      bairro.locais.map((local) => {
        html += "<div>";
        html += '<img src="' + local.foto + '" alt="' + local.nome + '">'; // Imagem do local
        html += "<h3>" + local.nome + "</h3>"; // Nome do local
        html += "<p><strong>Endereço:</strong> " + local.endereco + "</p>"; // Endereço do local
        html += "<p><strong>Orçamento:</strong> " + local.orcamento + "</p>"; // Orçamento do local
        html += "<p><strong>Avaliações:</strong> " + local.avaliacao + "</p>"; // Avaliações do local
        html +=
          "<p><strong>Popularidade:</strong> " + local.popularidade + "</p>"; // Popularidade do local
        html +=
          "<p><strong>Funcionamento:</strong> " + local.funcionamento + "</p>"; // Funcionamento do local
        html += "</div>";
      });
    });

    resultsContainer.innerHTML = html; // Exibe o HTML dos resultados no container
  };
});
