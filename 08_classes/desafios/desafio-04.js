class Produto {
    constructor(preco, quantidade) {
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularTotal() {
         return this.preco * this.quantidade;
    }
}

const produto1 = new Produto(80, 5);
console.log(produto1.calcularTotal());
