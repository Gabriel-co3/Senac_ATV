// class Produto {
//     #preco;

//     constructor(nome, preco) {
//         this.nome = nome;
//         this.#preco = preco;
//     }

//     apresentar() {
//         console.log(`Produto: ${this.nome}`);
//         console.log(`Preço: R$ ${this.#preco}`);
//     }
// }

// const produto = new Produto("Teclado", 80);

// produto.apresentar();


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
}
const produto = new Produto("Teclado", 250);

produto.apresentar();

const produto2 = new Produto("Monitor", 1000);

produto2.apresentar();