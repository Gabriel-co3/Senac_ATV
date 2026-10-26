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
        if (novoPreco < 0) {
            throw new Error("Preço inválido.");
        }
        this.#preco = novoPreco;
    }
}
const produto = new Produto("Mouse", 50);
console.log(`Preço inicial: ${produto.preco}`);
produto.preco = 100;
console.log(`Novo preço: ${produto.preco}`);
produto.apresentar();