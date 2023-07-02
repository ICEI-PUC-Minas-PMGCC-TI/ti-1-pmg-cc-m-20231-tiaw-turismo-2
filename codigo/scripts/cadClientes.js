$(document).ready(function() {

    $('#singintype').click(function() {
        $('#logintype').removeClass("selecionado");
        $(this).addClass("selecionado");
        $('#form-login').hide();
        $('#form-recoverPassword').hide();
        $('#form-singin').show();
    });
    $('#logintype').click(function() {
        $('#singintype').removeClass("selecionado");
        $('#logintype').removeClass("selecionado");
        $(this).addClass("selecionado");
        $('#form-singin').hide();
        $('#form-recoverPassword').hide();
        $('#form-login').show();
    });
    $('#recovertype').click(function() {
        $('#singintype').removeClass("selecionado");
        $('#logintype').removeClass("selecionado");
        $('#form-singin').hide();
        $('#form-login').hide();
        $('#form-recoverPassword').show();
    });

    $('#form-login').submit(function(event) {
      event.preventDefault();
    
      var nomeUsuario = $('#inputname[name="nusuario"]').val();
      var senhaUsuario = $('#inputsenha[name="susuario"]').val();

      $('#form-login')[0].reset();

      var dadosSalvos = localStorage.getItem('dadosCadastro');

      if(dadosSalvos){
        var dadosCadastro = JSON.parse(dadosSalvos);

        var usuarioRegistrado = dadosCadastro.find(function(usuario) {
            return usuario.nomeUsuario === nomeUsuario && usuario.senhaUsuario === senhaUsuario; 
        });

        if(usuarioRegistrado){
            alert("Usuário autenticado, login permitido!");
            window.location.href = "http://127.0.0.1:5500/index.html";
        }else {
            alert("Usuário não autenticado, login negado!");
        }
      }else{
        alert("Nenhum usuário cadastrado até o momento!");
      }

    });

    $('#form-singin').submit(function(event) {
        event.preventDefault();

        var nomeFisico = $('#inputnamefisico[name="nfisicousuario"]').val();
        var nomeUsuario = $('#inputname[name="nsigusuario"]').val();
        var emailUsuario = $('#inputemail[name="eusuario"]').val();
        var senhaUsuario = $('#inputsenha[name="ssigusuario"]').val();

        $('#form-singin')[0].reset();

        var dadosSalvos = localStorage.getItem('dadosCadastro');
        var dadosCadastro;

        if(dadosSalvos){
            dadosCadastro = JSON.parse(dadosSalvos);
            var verificaCadastro = dadosCadastro.find(function(usuario){
                return usuario.nomeUsuario === nomeUsuario || usuario.emailUsuario === emailUsuario;
            });
        }else{
            dadosCadastro = [];
        }

        if(!verificaCadastro){
            var novoCadastro = {
                nomeFisico: nomeFisico,
                nomeUsuario: nomeUsuario,
                emailUsuario: emailUsuario,
                senhaUsuario: senhaUsuario
            };
    
            dadosCadastro.push(novoCadastro);
    
            localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
        }else{
            alert("E-mail ou Nome de usuário ja utilizado");
        }
    });

    $('#form-recoverPassword').submit(function(event){
        event.preventDefault();

        var emailUsuario = $('#inputemail[name="erusuario"]').val();

        var dadosSalvos = localStorage.getItem('dadosCadastro');
        var dadosCadastro;

        if(dadosSalvos){
            dadosCadastro = JSON.parse(dadosSalvos);
            var verificaCadastro = dadosCadastro.find(function(usuario){
                return usuario.emailUsuario === emailUsuario;
            })
        }else{
            alert("Nenhum usuário com esse e-mail cadastrado!");
        }

        if(verificaCadastro){
            if ($('#inputPassword').length === 0){
                var novaSenha = $('<input>').attr({
                    type: 'password',
                    id: 'inputPassword',
                    name: 'srusuario',
                    placeholder: 'Nova Senha',
                    class: 'inputusuario'
                });
                novaSenha.appendTo('#recoverSubmit');
            }
            $('#form-recoverPassword').submit(function(usuario){
                var novaSenha = $('#inputPassword[name="srusuario"]').val();
                verificaCadastro.senhaUsuario = novaSenha;

                localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
                $('#form-recoverPassword')[0].reset();
                alert("Senha alterado com sucesso!");
                $('#inputPassword').remove();
            });
        }else{
            alert("Nenhum usuário com esse e-mail cadastrado!");
        }

    });
});
  
  