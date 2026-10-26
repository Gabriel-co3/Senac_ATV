class Produto {
    #preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.#preco = preco;
    }
    apresentar() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.#preco}`);
    }
    get preco() {
        return this.#preco;
    }
    set preco(novoPreco) {
        this.#preco = novoPreco;
    }
}
const produto = new Produto("Mouse", 50);

produto.preco = 100;

produto.apresentar();
