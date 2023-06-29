// Definindo as opções disponíveis para cada elemento select
const options = {
  bairro: ["Todos", "Savassi", "Lourdes", "Funcionários", "Pampulha", "Centro"], // Opções para o filtro de bairros
  tipo: ["Todos", "Restaurante", "Bar", "Parque", "Museu"], // Opções para o filtro de tipos
  orcamento: ["Todos", "$", "$$", "$$$"], // Opções para o filtro de faixa de orçamento
  avaliacao: ["Todas", "1", "2", "3", "4", "5"], // Opções para o filtro de avaliação
  popularidade: ["Todas", "Baixa", "Média", "Alta"], // Opções para o filtro de popularidade
  funcionamento: [
    "Todos",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ], // Opções para o filtro de dias de funcionamento
};

// Função para criar as opções em um elemento select
const createOptions = (selectId, options) => {
  const select = document.getElementById(selectId); // Obtém o elemento select pelo ID fornecido

  // Percorre as opções e cria os elementos option correspondentes
  options.map((option, index) => {
    const optionElement = document.createElement("option"); // Cria um elemento option
    optionElement.value = option; // Define o valor da opção como o próprio texto da opção
    optionElement.text = option; // Define o texto da opção

    // Define a primeira opção como selecionada por padrão
    if (index === 0) {
      optionElement.setAttribute("selected", "selected");
    }

    select.appendChild(optionElement); // Adiciona a opção ao elemento select
  });
};

// Cria as opções para cada filtro, passando o ID do elemento select e as opções correspondentes
createOptions("bairro", options.bairro);
createOptions("tipo", options.tipo);
createOptions("orcamento", options.orcamento);
createOptions("avaliacao", options.avaliacao);
createOptions("popularidade", options.popularidade);
createOptions("funcionamento", options.funcionamento);
