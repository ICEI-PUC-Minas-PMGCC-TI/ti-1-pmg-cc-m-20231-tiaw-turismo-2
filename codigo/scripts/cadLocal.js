document.getElementById("cadastroForm").addEventListener("submit", function(event) {
            event.preventDefault(); 

            // Obter os valores dos campos
            var neighborhood = document.getElementById("regiao").value;
            var name = document.getElementById("name").value;
            var type = document.getElementById("tipo").value;
            var address = document.getElementById("endereco").value;
            var budget = document.getElementById("budget").value;
            var rating = document.getElementById("rating").value;
            var popularity = document.getElementById("popularity").value;
            var openingHours = document.getElementById("openingHours").value;
            var image = document.getElementById("imagem").value;

            // Exibir os dados cadastrados
            var dadosSalvos = localStorage.getItem('locaisCadastrados');
            var locaisCadastrados;
            if (dadosSalvos) {
                locaisCadastrados = JSON.parse(dadosSalvos);
            } else {
                locaisCadastrados = [];
            }

            var localRegistrado = locaisCadastrados.find(function(local) {
                return local.endereco === endereco;
            });

            if (!localRegistrado) {
                var novoLocal = {
                neighborhood: neighborhood,
                name: name,
                type: type,
                address: address,
                budget: budget,
                rating: rating,
                popularity: popularity,
                openingHours: openingHours,
                image: image
                };
                locaisCadastrados.push(novoLocal);
                localStorage.setItem('locaisCadastrados', JSON.stringify(locaisCadastrados));
                console.log("Local cadastrado com sucesso!");
            } else {
                alert("Local já registrado!");
            }

            // Limpar os campos do formulário
            document.getElementById("cadastroForm").reset();
});