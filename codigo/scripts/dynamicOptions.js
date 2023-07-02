// Definindo as opções disponíveis para cada elemento select
const options = {
  neighborhoods: [
    "Todos",
    "Savassi",
    "Lourdes",
    "Funcionários",
    "Pampulha",
    "Centro",
  ], // Opções para o filtro de bairros
  types: ["Todos", "Restaurante", "Bar", "Parque", "Museu"], // Opções para o filtro de tipos
  budgets: ["Todos", "$", "$$", "$$$"], // Opções para o filtro de faixa de orçamento
  ratings: ["Todas", "1", "2", "3", "4", "5"], // Opções para o filtro de avaliação
  popularity: ["Todas", "Baixa", "Média", "Alta"], // Opções para o filtro de popularidade
  openingHours: [
    "Todos",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ], // Opções para o filtro de horários de funcionamento
};

// Função para criar as opções em um elemento select
const createOptions = (selectId, options) => {
  const select = document.getElementById(selectId); // Obtém o elemento select pelo ID fornecido

  // Percorre as opções e cria os elementos option correspondentes
  options.map((option, index) => {
    const optionElement = document.createElement("option"); // Cria um elemento option
    optionElement.value = index === 0 ? "" : option; // Define o valor da opção como o próprio texto da opção ou como uma string vazia para o primeiro elemento
    optionElement.text = option; // Define o texto da opção

    // Define a primeira opção como selecionada por padrão
    if (index === 0) {
      optionElement.setAttribute("selected", "selected");
    }

    select.appendChild(optionElement); // Adiciona a opção ao elemento select
  });
};

// Cria as opções para cada filtro, passando o ID do elemento select e as opções correspondentes
createOptions("neighborhood", options.neighborhoods);
createOptions("type", options.types);
createOptions("budget", options.budgets);
createOptions("rating", options.ratings);
createOptions("popularity", options.popularity);
createOptions("openingHours", options.openingHours);