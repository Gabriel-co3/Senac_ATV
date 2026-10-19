const produto = {
    nome: "Teclado",
    preco: 80,
    quantidade: 5,

    calcularTotal() {
        return this.preco * this.quantidade;
    },
    aprensetar () {
        console.log(`Produtos: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Total: R$ ${this.calcularTotal ()}`);
    }
};

produto.apresentar();