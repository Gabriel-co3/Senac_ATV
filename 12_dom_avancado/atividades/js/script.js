// 1. SELECIONAR OS ELEMENTOS
const campoNome = document.querySelector("#nome");
const campoIdade = document.querySelector("#idade");
const botao = document.querySelector("#mostrar");
const resultado = document.querySelector("#resultado");
// 2. EVENTO DE CLIQUE
botao.addEventListener("click", () => {
    // 3. CAPTURAR OS VALORES
    const nome = campoNome.value;
    const idade = campoIdade.value;
    // 4. VALIDAR OS CAMPOS
    if (nome === "" || idade === "") {
        resultado.textContent = "Preencha o nome e a idade!";
        return;
    }
    // 5. APRESENTAR OS DADOS
    resultado.textContent = "Nome: " + nome + " | Idade: " + idade + " anos";
});
