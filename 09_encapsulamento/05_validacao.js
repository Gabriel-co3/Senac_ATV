class Produto {
    #quantidade;

    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(valor) {
        if (!Number.isInteger(valor) || valor < 0) {
            throw new Error("Quantidade inválida.");
        }

        this.#quantidade = valor;
    }
}

const produto = new Produto("Teclado", 10);

try {
    produto.quantidade = -5; // Isso vai lançar um erro 
} catch (erro) {
    console.log("Erro:", erro.message);
}

console.log("Quantidade atual:", produto.quantidade);
