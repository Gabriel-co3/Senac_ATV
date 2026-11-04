console.log("JavaSCript carregado com sucesso!");

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", () => {
   window.open("https://www.google.com", "_blank");
});