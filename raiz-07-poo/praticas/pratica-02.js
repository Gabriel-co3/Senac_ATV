const produto = {
    codigo: 100,
    nome: "Teclado",
    preco: 200.49
}

produto.quantidade = 7;
console.log(produto);
produto.preco = 150;
delete produto.quantidade;
console.log("Após exclusão:", produto);