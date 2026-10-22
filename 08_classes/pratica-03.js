class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    calcularDesconto(percentual) {
        return this.preco * (1 - percentual / 100);
    }

    apresentar() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
    }
}

const produto = new Produto("Monitor", 1000);

produto.apresentar();

console.log(
    "Preço com desconto:",
    produto.calcularDesconto(10)
);
    