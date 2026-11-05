// 1. SELECIONAR ELEMENTOS
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
// 2. CAPTURAR O ENVIO
formulario.addEventListener("submit", (evento) => {
    // 3. IMPEDIR O RECARREGAMENTO
    evento.preventDefault();
    // 4. CAPTURAR OS VALORES
    const nome = campoNome.value;
    const email = campoEmail.value;
    // 5. APRESENTAR CONFIRMAÇÃO
    mensagem.textContent =
        "Formulário enviado com sucesso! " +
        "Obrigado, " + nome +
        "! Seu e-mail é: " + email;

    // 6. LIMPAR OS CAMPOS
    formulario.reset();

    // 7. VOLTAR O FOCO PARA O NOME
    campoNome.focus();
});
