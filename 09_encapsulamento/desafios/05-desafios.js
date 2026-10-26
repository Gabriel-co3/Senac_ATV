class Estoque {
    #quantidade;
    constructor(quantidade) {
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
const estoque = new Estoque(100); // Isso vai lançar um erro

try {
    estoque.quantidade = -50; // Isso vai lançar um erro
} catch (erro) {
    console.log("Erro:", erro.message);
    // throw new Error("Erro ao criar estoque.");
}




console.log("Quantidade atual:", estoque.quantidade);