class Produto {
    #preco;

    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    moeda(valor) {
        return valor.toLocaleString("pt-BR", {
             style: "currency"
             , currency: "BRL" });
    }
    apresentar() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: ${this.moeda(this.#preco)}`);
    }
    
    get preco() {
        return this.#preco;
    }

    set preco(valor) {
        if (!Number.isFinite(valor) || valor < 0) {
            throw new Error("Preço inválido.");
        }

        this.#preco = valor;
    }
}

const produto = new Produto("Mouse", 1110);

console.log(`Preço inicial: ${produto.preco}`);

// produto.preco = -20; // Isso vai lançar um erro
produto.preco = 3000; // Isso vai funcionar

console.log(`Novo preço: ${produto.moeda(produto.preco)}`);

