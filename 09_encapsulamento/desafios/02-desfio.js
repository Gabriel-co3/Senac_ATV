class Livro {
    #quantidade;
    constructor( quantidade) {
        this.#quantidade = quantidade;
    }
    get quantidade() {
        return this.#quantidade;
    }
}
const livro = new Livro(10);

console.log(`Quantidade inicial: ${livro.quantidade}`);
