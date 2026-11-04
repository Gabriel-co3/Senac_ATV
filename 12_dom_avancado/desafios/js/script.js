// 1. SELECIONANDO OS ELEMENTOS

const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const loginForm = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");


// 2. USUÁRIO E SENHA CORRETOS

const usuarioCorreto = "ADMIN";
const senhaCorreta = "1011";


// 3. EVENTO DE LOGIN

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nomeDigitado = usuario.value.trim();
    const senhaDigitada = senha.value;


    // 4. VERIFICANDO OS DADOS

    if (
        nomeDigitado === usuarioCorreto &&
        senhaDigitada === senhaCorreta
    ) {

        mensagem.textContent = "ACESSO LIBERADO!";

        mensagem.style.color = "#00ff88";


        // 5. REDIRECIONANDO PARA OUTRA PÁGINA

        setTimeout(function() {

            window.location.href = "01-painel.html";

        }, 1000);


    } else {

        mensagem.textContent = "ACESSO NEGADO! Dados incorretos.";

        mensagem.style.color = "#ff4444";

    }

});